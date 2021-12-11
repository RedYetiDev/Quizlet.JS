
const got = require("got");
const ws = require("ws");
const Live = require("./live");
function formatMessage(m) {
    return Buffer.from(m.toString('hex').replace(/(..)/g, '-$1').slice(7).replace(/-5c-22-/g, '-27-').replace(/-/g,''), 'hex').toString()
}
class Checkpoint extends Live {
    async #checkGameInstance() {
        var data = await got(`https://checkpoint.quizlet.com/join?gameCode=${this.pin}&token=${this.cpToken}`).json();
        if (!data) this.emit('error',`Game Not Found: ${this.pin}`);
        return;
    }

    async joinGame() {
        this.currentPossibleAnswers = [];
        if (!this.playerId || !this.playerToken) {
            var {token, playerId, cpToken, uid} = await this.getTokenAndId();
            this.playerId = playerId;
            this.playerToken = token;
            this.cpToken = cpToken;
            this.uid = uid
        }
        this.#checkGameInstance()

        this.socket = new ws(`wss://checkpoint.quizlet.com/socket.io/?EIO=4&transport=websocket`, {
            headers: {
                'User-Agent': 'quizlet.js'
            }
        })
        await new Promise(resolve => {
            this.socket.once("open", () => {
                this.socket.once("message", (m) => {
                    if (!JSON.parse(`{${m.toString().split('0{')[1]}`).sid) {this.emit('error', 'Socket Connection Error')}
                    this.socket.send(`40{"gameCode":"${this.pin}","token":"${this.cpToken}","uid":"${this.uid}"}`)
                    this.socket.once("message", (m) => {
                        if (!JSON.parse(`{${m.toString().split('40{')[1]}`).sid) {this.emit('error', 'Socket Connection Error')}
                        this.socket.send(`42["join-game","${this.name}",null,"${this.image}"]`)
                        this.socket.once("message", (m) => {
                            var m = formatMessage(m);
                            var d = JSON.parse(JSON.parse(m)[1].replace(/'/g, '"'))
                            if (!d.connectionStatus) {this.emit('error', 'Socket Connection Error')}
                            this.playerNumber = d.userId
                            resolve()
                        })
                    })
                })
            })
        })
        this.emit("connect");
        this.socket.on("message", await this.#messageHandler.bind(this))
    }

    async #messageHandler(m) {
        if (m == "2") {
            await this.socket.send("3");
            return;
        }
        var mType = JSON.parse(m.slice(2))[0]
        if (mType == "player-removed") {
            if (JSON.parse(m.slice(2))[1] == this.playerNumber) {this.emit('disconnect')}
        } else if (mType == "studiable-item-ids") {
            this.promptIds = JSON.parse('['+JSON.parse(m.slice(2))[1]+']')
        } else if (mType == "next-question") {
            var m = formatMessage(m).replace(/'/g,'"')
            this.currentQuestion = JSON.parse('{"' + m.toString().slice(19, m.toString().length - 1).replace(/"{/g, '{').replace(/}"/g,"}"))
            this.#runQuestion()
        } else if (mType == "grade-answers") {
            this.emit('gradeAnswers', this.isCorrect)
        } else if (mType == "game-status") {
            this.emit('status', JSON.parse(m.slice(2))[1])
        }
    }
    async answer(a) {
        this.isCorrect = this.currentPossibleAnswers.indexOf(a) == this.currentQuestion.questionConfig.answer.value
        await this.socket.send(`42["submit-answer","${this.playerNumber}",${this.currentQuestion.studiableItemId},${this.currentPossibleAnswers.indexOf(a)},${this.isCorrect}]`)
    }
    async #runQuestion() {
        this.currentPossibleAnswers = []
        this.currentQuestion.questionConfig.question.options.forEach(opt => {
            this.currentPossibleAnswers.push(opt.attributes[0].plainText)
        })
        var term = this.currentQuestion.questionConfig.question.prompt.attributes[0].plainText
        var answer;
        if (this.currentQuestion.questionConfig.answer.type == "OptionIndexAnswer") {
            answer = this.currentPossibleAnswers[this.currentQuestion.questionConfig.answer.value]
        } else {
            this.emit('error', `Invalid Answer Type.\nPlease report the following to RedYetiDev: ${JSON.stringify(this.currentQuestion.questionConfig.answer)} `)
        }
        this.emit('question', term, this.currentPossibleAnswers, answer);
    }
}

module.exports = Checkpoint;
