import { RequestHandler } from "./api.js";
import Class from "./class.js";
import Folder from "./folder.js";
import StudySet from "./set.js";

export default class User {
    /**
     * Gets a user by their ID
     * @param {(string|number)} id The user's ID
     * @returns {Promise<User>} The user
     * @memberof User
     * @async
     */
    static async getByID(id) {
        var {user: [user]} = await RequestHandler.getAPI("users/"+id);
        return new this(user);
    }

    /**
     * Gets a user by their email
     * @param {(string|number)} email The user's email
     * @returns {Promise<User>} The user
     * @memberof User
     * @async
     */
    static async getByEmail(email) {
        var {user: [user]} = await RequestHandler.getAPI(`users?filters[email]=${email}&filters[isDeleted]=false`);
        return new this(user);
    }
    /**
     * Gets a user by their username
     * @param {(string|number)} username The user's username
     * @returns {Promise<User>} The user
     * @memberof User
     * @async
     */
    static async getByUsername(username) {
        var {user: [user]} = await RequestHandler.getAPI(`users?filters[username]=${username}&filters[isDeleted]=false`);
        return new this(user);
    }
    /**
     * This constructor is not intended to be used. It is private only
     * @hideconstructor
     * @constructs User
     * @param {object} user The raw user data
     */
    constructor(user) {
        /**
         * This user's ID
         * @type {number}
         * @readonly
         */
        this.id = user.id;
        /**
         * This user's username
         * @type {string}
         * @readonly
         */
        this.username = user.username;
        /**
         * This user's avatar
         * @type {string}
         * @readonly
         */
        this.avatar = user._imageUrl;
        /**
         * The number of classes that this user is a member of
         * @type {number}
         * @readonly
         */
        this.numClasses = user._numClassMemberships
        /**
         * This user's type. 0 = Student; 1 = ?; 2 = Teacher
         * @type {number}
         * @readonly
         */
        this.type = user.type;
    }

    /**
     * Gets the sets that the user has created
     * @async
     * @memberof User
     * @instance
     * @returns {Promise<StudySet[]>} The sets
     */
    async getSets() {
        return await StudySet.getFromUser(this.id);
    }

    /**
     * Gets the classes that this user is a member of
     * @async
     * @instance
     * @memberof User
     * @returns {Promise<Class[]>} The classes
     */
    async getClasses() {
        return await Class.getFromUser(this.id);
    }

    /**
     * Gets the folders that this user has created
     * @async
     * @instance
     * @memberof User
     * @returns {Promise<Folder[]>} The folders
     */
    async getFolders() {
        return await Folder.getFromUser(this.id)
    }
};