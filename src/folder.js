import { RequestHandler } from "./api.js";
import StudySet from "./set.js";
import User from "./user.js";

export default class Folder {
    /**
     * Get a folder via it's ID
     * @param {(string|number)} id The folder ID 
     * @returns {Promise<Folder>} The folder
     * @async
     * @memberof Folder
     */
    static async getByID(id) {
        var { folder: [folder] } = await RequestHandler.getAPI(`folders/${id}`);
        return new this(folder);
    }

    /**
     * Get folders that a user has created
     * @param {(string|number)} id The User ID
     * @returns {Promise<Folder[]>} The folders
     * @async
     * @memberof Folder
     */
    static async getFromUser(id) {
        var {folder} = await RequestHandler.getAPI(`folders?filters[isDeleted]=false&filters[personId]=${id}`) // TODO: Check filters[isHidden] to see if we can get hidden folders
        return folder.map(f => new this(f));
    }

    /**
     * This constructor is not intented to be used. It is private only
     * @constructs Folder
     * @hideconstructor
     * @param {object} folder The folder
     */
    constructor(folder) {
        /**
         * The folder ID
         * @type {number}
         * @readonly
         */
        this.id = folder.id;
        /**
         * The folder's creator's ID
         * @type {number}
         * @readonly
         */
        this.creatorId = folder.personId;
        /**
         * The folder's title
         * @type {string}
         * @readonly
         */
        this.title = folder.name;
        /**
         * The folder's description
         * @type {string}
         * @readonly
         */
        this.description = folder.description;
        /**
         * The folder's web access URL
         * @type {string}
         * @readonly
         */
        this.url = folder._webUrl;
    }

    /**
     * Get the creator of a folder
     * @memberof Folder
     * @instance
     * @async
     * @returns {Promise<User>} The creator
     */
    async getCreator() {
        return await User.getByID(this.creatorId);
    }

    /**
     * Get the containing study sets in this folder
     * @instance
     * @memberof Folder
     * @async
     * @returns {Promise<StudySet>}
     */
    async getSets() {
        return await StudySet.getFromFolder(this.id);
    }
}