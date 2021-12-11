
const got = require("got");
const ws = require("ws");
const EventEmitter = require("events");
const qData = {
    endpoint: 'https://quizlet.com/webapi/3.2',
    apiVersion: '45944'
}
class Live extends EventEmitter {
    constructor(pin, name, opt = {}) {
        if (!pin) throw new Error("No PIN Provided")
        super()
        this.pin = pin.toString().replace('-', '');
        if (!name && !opt.accountName) console.warn('No name provided, defaulting to "Quizlet.JS Bot"')
        this.name = name || "Quizlet.JS Bot";
        this.round = 0;
        this.streak = 0;
        this.userImage = opt.userImage || "https://quizlet.com/favicon.ico"
        this.accountName = opt.accountName || undefined
    }

    async getTokenAndId() {

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
            playerId: data.split('uid')[1].split(`"`)[2],
            cpToken: data.split(`"checkpointToken":"`)[1].split(`",`)[0],
            uid: data.split(`"uid":"`)[1].split(`",`)[0]
        }
    }

    async leave() {
        await this.socket.close();
        this.emit('disconnect');
    }
}

module.exports = Live;
