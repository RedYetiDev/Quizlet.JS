
const got = require("got");
const ws = require("ws");
const EventEmitter = require("events");
const qData = {
    endpoint: 'https://quizlet.com/webapi/3.2',
    apiVersion: '45944'
}
class Quizlet extends EventEmitter {
    constructor(pin, name, opt = {}) {
        if (!pin) throw new Error("No PIN Provided")
        super()
        this.pin = pin.toString().replace('-', '');
        if (!name && !opt.accountName) console.warn('No name provided, defaulting to "Quizlet.JS Bot"')
        this.name = name || "Quizlet.JS Bot";
        this.round = 0;
        this.streak = 0;
        this.userImage = opt.userImage || "https://quizlet.com/favicon.ico"
        if (!this.userImage.match(/^https?:\/\//g)) this.userImage = `https://${this.userImage}`
        if (!new URL(this.userImage).host.includes('quizlet.com')) {
            this.userImage = "https://quizlet.com/favicon.ico"
            console.warn('Image provided does start belong to the quizlet domain, switching to the quizlet icon')
        }
        this.accountName = opt.accountName || undefined
    }

    async #getTokenAndId() {

        var headers = {
            'User-Agent': 'Quizlet.JS'
        }

        if (this.accountName) {
            var data = await got(`${qData.endpoint}/users?filters={"username":"${this.accountName}"}`, { headers }).json();
            this.accountInfo = data.responses[0].models.user[0]
            if (!this.accountInfo) this.emit('error','Invalid Account Username');
            headers.Cookie = `ab.storage.userId.6f8c2b67-8bd5-42f6-9c5f-571d9701f693={"g":"${this.accountInfo.id}"}`
            this.name = this.accountInfo.firstName
            this.userImage = this.accountInfo._imageUrl
        }

        var data = await got("https://quizlet.com/live", {
            headers: headers
        }).text();

        return {
            token: data.split(`"multiplayerToken":"`)[1].split(`",`)[0],
            playerId: data.split('uid')[1].split(`"`)[2]
        }
    }

    async #checkGameInstance() {

        var data = await got(`${qData.endpoint}/game-instances?filters=%7B%22gameCode%22%3A%22${this.pin}%22%2C%22isInProgress%22%3Atrue%2C%22isDeleted%22%3Afalse%7D&perPage=500`, {
            headers: {
                "user-agent": "quizlet.js"
            }
        }).json();

        if (data.responses[0].models.gameInstance.length < 1) this.emit('error',`Game Not Found: ${this.pin}`);

        return;
    }

    async joinGame() {
        this.#checkGameInstance()
        if (!this.playerId || !this.playerToken) {
            var {token, playerId} = await this.#getTokenAndId();
            this.playerId = playerId;
            this.playerToken = token;
        }
        var data = await got(`https://quizlet.com/multiplayer/1/${qData.apiVersion}/${this.pin}/games/socket/?gameId=${this.pin}&token=${token}&EIO=4&transport=polling&t=Nmp37wm`, {
            headers: {
                "user-agent": "quizlet.js"
            }
        }).text();

        var sid = JSON.parse(data.slice(1)).sid;

        var d = await got.post(`https://quizlet.com/multiplayer/1/${qData.apiVersion}/${this.pin}/games/socket/?gameId=${this.pin}&token=${token}&EIO=4&transport=polling&t=Nn1KLw7&sid=${sid}`, {
            headers: {
                "user-agent": "quizlet.js"
            },
            body: "40"
        }).text();

        if (d != "ok") this.emit('error',"The server did not response with `ok`: " + d)

        var data = await got(`https://quizlet.com/multiplayer/1/${qData.apiVersion}/${this.pin}/games/socket/?gameId=${this.pin}&token=${token}&EIO=4&transport=polling&t=Nn1KLw9&sid=${sid}`, {
            headers: {
                "user-agent": "quizlet.js"
            }
        }).text();

        this.socket = new ws(`wss://quizlet.com/multiplayer/1/${qData.apiVersion}/${this.pin}/games/socket/?gameId=${this.pin}&token=${token}&EIO=4&transport=websocket&sid=${sid}`, { headers: { 'User-Agent': 'quizlet.js' }})
        await new Promise(resolve => {
            this.socket.once("open", () => {
                this.socket.send("2probe")
                this.socket.once("message", (m) => {
                    if (m != "3probe") this.emit('error',"Socket probing failed. Expected `3probe`, got `" + m + "`")
                    resolve()
                })
            })
        })

        await new Promise(resolve => {
            this.socket.send("5")
            resolve()
        })
        
        await this.#connectWithName();
        this.emit("connect");

        this.socket.on("message", await this.#messageHandler.bind(this))
    }

    async #connectWithName() {
        this.socket.send(`42["player-join",{"username":"${this.name}","image":"${this.userImage}"}]`)
        await new Promise(resolve => {
            this.socket.once('message', (m) => {
                this.#handleGameState(m)
                this.answerTypes = {
                    prompt: this.gameState.options.promptWith == 2 ? "definition" : "word",
                    answer: this.gameState.options.answerWith == 2 ? "definition" : "word"
                }
                resolve()
            })
        })
        return;
    }

    #handleTeamAssignments() {
        this.gameState.teams.forEach(team => {
            if (team.players.includes(this.playerId)) {
                this.team = team;
                return;
            }
        })
    }

    #handleGameState(m) {
        this.gameState = JSON.parse(m.slice(2))[1];
        if (JSON.parse(m.slice(2))[0] == "game-error") {
            if (this.gameState.type = "ERROR_TYPES.DUPLICATE_PLAYER_NAME") this.emit('error',`Duplicate player name; The name "${this.name}" is already in use.`)
            this.emit('error','Invalid Game State: ' + this.gameState.type)
        }
        if (this.gameState.teams && this.team) {
            this.#handleTeamAssignments()
        }
    }

    async answer(a) {

        var a1 = this.gameState.terms.filter(t => t.definition == a)[0].id

        await this.socket.send(`42["matchteam.submit-answer",{"streak":${this.streak},"round":${this.round},"termId":${a1}, "submissionTime": ${Date.now()}}]`)
    }

    async #messageHandler(m) {
        if (m == "2") {
            await this.socket.send("3");
            return;
        }
        var mType = JSON.parse(m.slice(2))[0]
        if (mType == "replay-game") {
            this.emit('replay');
            this.#handleGameState(m);
            this.streak = 0;
            this.round = 0;
            this.hasGameEnded = false;
        }
        if (mType == "current-game-state-and-set" || mType == "current-game-state") {
            this.#handleGameState(m);
            // Check game statuses
            if (!this.gameState.players[this.playerId]) {
                this.emit('disconnect');
                return;
            }
            if (this.gameState.statuses.includes("assign_teams") && !this.gameState.statuses.includes("playing")) {
                this.#handleTeamAssignments();
                var teamPlayers = []
                Object.values(this.gameState.players).filter(p => this.team.players.includes(p.id)).forEach(player => teamPlayers.push(player.username))
                this.emit("teamAssignments", this.team.name, teamPlayers);
                return;
            } else if (this.gameState.statuses == ["lobby"]) {
                this.team = null;
            } else if (this.gameState.statuses.includes("playing") && !this.gameState.statuses.includes('ended') && this.team) {
                this.#runQuestion();
            } else if (this.gameState.statuses.includes('ended') && !this.hasGameEnded) {
                this.hasGameEnded = true;
                var didWin = false;
                if (this.team.streaks[this.streak].answers.length == this.team.streaks[this.streak].prompts.length) {
                    didWin = true
                }
                this.emit("gameOver", didWin)
            }
        } else if (mType == "matchteam.new-streak") {
            // We don't need to do anything here
            if (this.team.players.includes(JSON.parse(m.slice(2))[1].playerId)) {
                this.team.streaks.push(JSON.parse(m.slice(2))[1].streak)
                this.streak += 1;
                this.round = 0;
            }
        } else if (mType == "matchteam.new-answer") {
            var pm = JSON.parse(m.slice(2))[1]
            if (this.team.players.includes(pm.answer.playerId)) {
                this.emit('answer', pm.answer.isCorrect, this.gameState.players[pm.answer.playerId.toString()].username)
                if (pm.answer.isCorrect) {
                    this.round = pm.roundNum + 1
                    if (this.gameState.type == 1) {
                        this.#runQuestion()
                    }
                }
            } else {
                this.emit('otherAnswer', pm.answer.isCorrect, this.gameState.players[pm.answer.playerId.toString()].username)
            }
        }
    }

    async #runQuestion() {
        var possibleAnswers = [];
        var term = this.gameState.terms.filter(term => this.team.streaks[this.streak].prompts[this.round] == term.id)[0]
        this.team.streaks[this.streak].terms[this.playerId].forEach(id => {
            possibleAnswers.push(this.gameState.terms.filter(term => term.id == id)[0].definition)
        })
        
         if (this.gameState.type == 1) {
            if (!this.team.streaks[this.streak].terms[this.playerId].includes(this.team.streaks[this.streak].prompts[this.round])) {
                this.emit('teamQuestion', term.word, possibleAnswers, term.definition)
                return;
            }
        }
        this.emit('question', term.word, possibleAnswers, term.definition);
    }

    async leave() {
        await this.socket.close();
        this.emit('disconnect');
    }
}

module.exports = Quizlet;
