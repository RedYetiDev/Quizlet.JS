import got from "got";
import { io } from "socket.io-client";
import { QuizletLiveError, RequestHandler } from "../api.js";
import Live from "./live.js";

/**
 * A Quizlet Checkpoint Client
 * @class Checkpoint
 * @extends {Live}
 */
export default class Checkpoint extends Live {
    /**
     * Join a Quizlet Checkpoint Game
     * @async
     * @param {string} pin The game PIN 
     * @param {string} name Your username
     * @param {string} image The avatar to use
     * @memberof Checkpoint
     * @instance
     * 
     * @fires Checkpoint#join
     * @fires Checkpoint#end
     * @fires Checkpoint#start
     * @fires Checkpoint#answer
     * @fires Checkpoint#disconnect
     * @fires Checkpoint#question
     * 
     * @throws {QuizletLiveError}
     */
    async joinGame(pin, name, image) {
        /**
         * The user's ID. The user ID is undefined until the player joins the game
         * @var {(string|undefined)} uid
         * @memberof Checkpoint
         * @readonly
         */

        await super.joinGame(pin, name, image);

        if (this.gamemode !== 0) throw new Error(`The game pin provided is not meant for checkpoint games`)
        // join game
        var gameInstance = await got(`https://checkpoint.quizlet.com/join?gameCode=${this.pin}&token=${this.token}`, {
            headers: RequestHandler.headers
        }).json();
        if (gameInstance.message) throw new QuizletLiveError(gameInstance);

        /**
         * The Socket.IO socket
         * @readonly
         */
        this.socket = io("wss://checkpoint.quizlet.com", {
            transports: ["websocket"],
            auth: {
                token: this.token,
                gameCode: this.pin,
                uid: this.id
            },
            extraHeaders: RequestHandler.headers
        });

        await new Promise((resolve, reject) => {
            this.socket.once("connect_error", reject);
            this.socket.once("connect", resolve);
        });

        if (gameInstance.gameStatus === "playing") {
            this.socket.emit("late-join", "requested", this.name, null, this.image);
        } else {
            this.socket.emit("join-game", this.name, null, this.image);
        }

        this.socket.on("player-added", (player) => {
            var { userId } = JSON.parse(player);
            this.uid = userId;
            /**
             * You have successfully joined the game
             * @event Checkpoint#join
             */
            this.emit("join")
        })

        this.socket.on("game-status", (status) => {
            if (status == "ended" && this.active) {
                this.active = false;
                /**
                 * The game has ended
                 * @event Checkpoint#end
                 */
                this.emit("end");
            }
        });
        this.socket.on("late-join", (lj) => {
            if (lj.status === "accepted") {
                this.active = true;
                this.uid = lj.socketId;
                /**
                 * The game is starting
                 * @event Checkpoint#start
                 */
                this.emit("start")
            }
        })

        this.socket.on("grade-answers", () => {
            /**
             * Your answers have been graded. Returns whether your answer was correct
             * @event Checkpoint#answer
             * @type {boolean}
             */
            this.emit("answer", this.isCorrect);
        })

        this.socket.on("player-removed", (uid) => {
            if (uid === this.uid) {
                this.socket.disconnect();
            }
        })

        this.socket.on("disconnect", (reason) => {
            /**
             * The socket was disconnected. Returns the disconnect reason
             * @event Checkpoint#disconnect
             * @type {*}
             */
            this.emit("disconnect", reason)
        })

        this.socket.on("next-question", question => {
            try {
                if (!this.active) {
                    this.active = true;
                    this.emit("start");
                };
                var { question: config, answer } = JSON.parse(question.questionConfig);
                /**
                 * The current question
                 * @readonly
                 * @type {object}
                 * @property {Content} prompt
                 * @property {(number|string)} answer
                 * @property {Content[]} options
                 * @property {string} id
                 * @property {("WrittenQuestion"|"MultipleChoiceQuestion")} type
                 */
                this.cq = {
                    prompt: new Content(config.prompt),
                    answer: answer.value, // TODO more on this
                    options: config.options?.map(option => new Content(option)),
                    id: question.studiableItemId,
                    type: config.type
                }

                /**
                 * Emitted when the client should answer a question. Returns the current question
                 * @event Checkpoint#question
                 * @type {object}
                 * @property {Content} prompt
                 * @property {(number|string)} answer
                 * @property {Content[]} options
                 * @property {string} id
                 * @property {("WrittenQuestion"|"MultipleChoiceQuestion")} type
                */
                this.emit("question", this.cq)
            } catch (e) { Promise.reject(e) }
        })

        this.socket.onAny(event => console.log(event));
    }
    /**
     * @memberof Checkpoint
     * @instance
     * @param {(string|Content)} answer The question's answer. If the type is "string", then the answer is considered an answer for a written question, or the text content of the answer. If the type is "Content", then the answer is just considered the answer
     * @throws {Error}
     */
    answer(answer) {
        try {
            if (!this.active) Promise.reject(new Error("Game is not active"));

            switch (typeof answer) {
                case "string":
                    if (typeof this.cq.answer === "string") {
                        this.isCorrect = this.cq.answer.toLowerCase() == answer.toLowerCase();
                        var subAnswer = answer;
                    } else {
                        this.isCorrect = this.cq.options[this.cq.answer].text.toLowerCase() === answer.toLowerCase();
                        var subAnswer = this.cq.options.findIndex(option => option.text.toLowerCase() === answer.toLowerCase());
                    }
                    break;
                case "object":
                    if (answer instanceof Content) {
                        this.isCorrect = this.cq.options[this.cq.answer].text.toLowerCase() === answer.text.toLowerCase()
                        var subAnswer = this.cq.options.findIndex(option => option.text.toLowerCase() === answer.text.toLowerCase());
                        break;
                    };
                case "number":
                    this.isCorrect = this.cq.answer == answer;
                    var subAnswer = answer;
                default:
                    Promise.reject(new Error(`Answer must be a string, number, or an instance of Content. Instead, got ${answer} of type ${typeof answer}`))
            }

            if (!subAnswer) Promise.reject(new Error(`Answer did not correctly correspond to a valid answer. (Answer was ${answer} of type ${typeof answer})`))

            this.socket.emit("submit-answer", this.uid, parseInt(this.cq.id), subAnswer, this.isCorrect, this.cq.type)
        } catch (e) {
            Promise.reject(e);
        }
    }
};

/**
 * @classdesc Question options/prompt content
 */
class Content {
    constructor(option) {
        /**
         * The content's text
         * @type {string}
         */
        this.text = option.attributes.find(a => a.type === "TextAttribute")?.plainText;
        /**
         * The content's audio. (Usually Text-To-Speech)
         * @type {string}
         */
        this.audio = option.attributes.find(a => a.type === "AudioAttribute")?.url;
        /**
         * The content's image media
         * @type {string}
         */
        this.image = option.attributes.find(a => a.type === "ImageAttribute")?.url; // I assume
    }
};