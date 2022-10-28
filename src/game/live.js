import EventEmitter from "node:events";
import got from "got";
import { RequestHandler } from "../api.js";

/**
 * The Quizlet Live client
 * @class Live
 * @hideconstructor
 * @extends {EventEmitter}
 */
export default class Live extends EventEmitter {
    /**
     * @async
     * @memberof Live
     * @returns {Promise<{classicToken: string, checkpointToken: string, id: string}>}
     */
    static async getTokenAndID() {
        var response = await got(`https://quizlet.com/live`, {
            headers: RequestHandler.headers
        }).text();
        return {
            classicToken: response.split(`"multiplayerToken":"`)[1].split(`",`)[0],
            checkpointToken: response.split(`"checkpointToken":"`)[1].split(`",`)[0],
            id: response.split(`"personId":"`)[1].split(`",`)[0],
        };
    }

    /**
     * @package
     * @async
     * 
     * @param {string} pin The game PIN
     * @param {string} name The username to join with
     * @param {string} image The avatar URL
     * @memberof Live
     * @instance
     */
    async joinGame(pin, name, image) {
        /**
         * Whether the game is currently active
         * @type {boolean}
         * @readonly
         */
        this.active = false;
        /**
         * The game PIN
         * @type {string}
         * @readonly
         */
        this.pin = pin.toUpperCase();

        /**
         * The gamemode. 0 = Checkpoint and 1 = Classic
         * @type {number}
         * @readonly
         */
        this.gamemode = this.pin.startsWith("C") ? 0 : 1 // 0 = Checkpoint | 1 = Classic

        /**
         * The client's username
         * @type {string}
         * @default "Quizlet.JS Bot"
         * @readonly
         */
        this.name = name || "Quizlet.JS Bot";
        /**
         * The client's avatar
         * @type {string}
         * @default "https://assets.quizlet.com/a/j/dist/app/i/live_game/default-avatar.610344da6feae31.png"
         * @readonly
         */
        this.image = image || "https://assets.quizlet.com/a/j/dist/app/i/live_game/default-avatar.610344da6feae31.png"

        var tokenAndID = await Live.getTokenAndID();

        /**
         * The user's token
         * @type {string}
         * @readonly
         */
        this.token = this.gamemode === 0 ? tokenAndID.checkpointToken : tokenAndID.classicToken; // TODO: Maybe add user support kind of

        /**
         * The user's ID
         * @type {string}
         * @readonly
         */
        this.id = tokenAndID.id;
    }
}