
const got = require("got");
const ws = require("ws");
const EventEmitter = require("events");
const { resolve } = require("path");

class Quizlet extends EventEmitter {
    constructor(pin, name, userImage) {
        super()
        this.userImage = userImage || "https://quizlet.com/favicon.ico"
        this.pin = pin;
        this.name = name;
        this.game = {};
    }

    /**
     @function generateToken Under Development
     */

    async getTokenAndId() {
        var data = await got("https://quizlet.com/live", {
            headers: {
                "user-agent": "quizlet.js"
            }
        }).text();

        return {
            token: data.split(`"multiplayerToken":"`)[1].split(`",`)[0],
            playerId: data.split('uid')[1].split(`"`)[2]
        }
    }

    async checkGameInstance() {
        var data = await got(`https://quizlet.com/webapi/3.2/game-instances?filters=%7B%22gameCode%22%3A%22${this.pin}%22%2C%22isInProgress%22%3Atrue%2C%22isDeleted%22%3Afalse%7D&perPage=500`, {
            headers: {
                "user-agent": "quizlet.js"
            }
        }).json();

        if (data.responses[0].models.gameInstance.length < 1) throw new Error(`Game Not Found: ${this.pin}`);

        return;
    }

    async joinGame() {
        // Check if game exists
        this.checkGameInstance()

        var {token, playerId} = await this.getTokenAndId();
        this.playerId = playerId;
        var data = await got(`https://quizlet.com/multiplayer/1/45697/${this.pin}/games/socket/?gameId=${this.pin}&token=${token}&EIO=4&transport=polling&t=Nmp37wm`, {
            headers: {
                "user-agent": "quizlet.js"
            }
        }).text();

        var sid = JSON.parse(data.slice(1)).sid;

        var d = await got.post(`https://quizlet.com/multiplayer/1/45697/${this.pin}/games/socket/?gameId=${this.pin}&token=${token}&EIO=4&transport=polling&t=Nn1KLw7&sid=${sid}`, {
            headers: {
                "user-agent": "quizlet.js"
            },
            body: "40"
        }).text();

        if (d != "ok") throw new Error("The server did not response with `ok`: " + d)

        var data = await got(`https://quizlet.com/multiplayer/1/45697/${this.pin}/games/socket/?gameId=${this.pin}&token=${token}&EIO=4&transport=polling&t=Nn1KLw9&sid=${sid}`, {
            headers: {
                "user-agent": "quizlet.js"
            }
        }).text();

        this.gameData = JSON.parse(data.split(/42(.+)/)[1])[1]

        console.log(`Got Game Data. The set is: "${this.gameData.set.title}".`)
        
        this.getAnswers(this.gameData.terms);

        console.log(this.answers)

        await this.connectToSocket(token, sid);
        
        await this.connectWithName();

        this.emit("connect");

        this.socket.on("message", this.messageHandler)
    }

    async connectToSocket(token, sid) {
        this.socket = new ws(`wss://quizlet.com/multiplayer/1/45697/${this.pin}/games/socket/?gameId=${this.pin}&token=${token}&EIO=4&transport=websocket&sid=${sid}`, [], {
            headers: {
                'user-agent': 'quizlet.js'
            }
        });

        await new Promise(resolve => {
            this.socket.on("open", () => {
                console.log("Connected to Quizlet socket")
    
                // Test probing
    
                this.socket.send("2probe")
                this.socket.once("message", (m) => {
                    if (m != "3probe") throw new Error("Socket probing failed. Expected `3probe`, got `" + m + "`")
                    console.log("Probing successful")
                    resolve()
                })
            })
        })

        await new Promise(resolve => {
            console.log("Sending...")
            this.socket.send("5")
            resolve()
        })

        return;
    }

    async connectWithName() {
        this.socket.send(`42["player-join",{"username":"${this.name}","image":"${this.userImage}"}]`)
        await new Promise(resolve => {
            this.socket.once("message", (m) => {
                this.handleGameState(m);
                resolve()
            })
        })
        return;
    }

    handleGameState(gameState) {
        this.gameState = JSON.parse(gameState.slice(2))[1]
    }

    getAnswers(terms) {
        this.answers = [];
        terms.forEach((term) => {
            this.answers.push(term.definition)
        });
    }

    async handleTeamAssignments() {
        var assignedTeam;
        this.gameState.teams.forEach(team => {
            if (team.players.includes(this.))
        })
        this.team = assignedTeam
    }

    async messageHandler(m) {
        var mId = m.slice(0, 2)
        if (mId == "42") {
            this.handleGameState(m);
            // Check game statuses
            this.gameStatus = this.gameState.statuses
            if (this.gameState.statuses.includes("assign_teams")) {
                console.log("The game has assigned teams.")
                this.handleTeamAssignments();
                return;
            }
        }
    }
}

module.exports = Quizlet;