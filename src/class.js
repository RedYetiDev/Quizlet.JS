import { RequestHandler } from "./api.js";
import StudySet from "./set.js";
import User from "./user.js";

export default class Class {
    /**
     * Gets a class by it's ID
     * @param {(string|number)} id The class ID
     * @returns {Promise<Class>} The class
     * 
     * @memberof Class
     * @async
     */
    static async getByID(id) {
        var { "class": [clazz] } = await RequestHandler.getAPI("classes/" + id);
        return new this(clazz);
    }
    /**
     * Gets a class by it's join code
     * @param {string} code The class code
     * @returns {Promise<Class>} The class
     * 
     * @memberof Class
     * @async
     */
    static async getByCode(code) {
        var { "class": [clazz] } = await RequestHandler.getAPI(`classes?perPage=1000&filters[code]=${code}&filters[isDeleted]=false`);
        return new this(clazz);
    }
    /**
     * Gets a list of classes by the schools ID
     * @param {(string|number)} id The school ID
     * @returns {Promise<Class[]>} The classes
     * 
     * @memberof Class
     * @async
     */
    static async getFromSchool(id) {
        var { "class": classes } = await RequestHandler.getAPI(`classes?perPage=1000&filters[schoolId]=${id}&filters[isDeleted]=false`);
        return classes.map(s => new this(s));
    }
    /**
     * Gets all the classes that a user is a member of
     * @param {(string|number)} id The user ID
     * @returns {Promise<Class[]>} The classes
     * 
     * @memberof Class
     * @async
     */
    static async getFromUser(id) {
        var { "class": [clazz] } = await RequestHandler.getAPI(`class-memberships?perPage=1000&filters[userId]=${id}&include[classMembership]=class&filters[isDeleted]=false`);
        return clazz.map(s => new this(s));
    }

    /**
     * This constructor is not intended to be used. It is private only
     * @param {object} clazz The raw class data
     * @hideconstructor
     * @constructs Class
     */
    constructor(clazz) {
        /**
         * The class ID
         * @readonly
         * @type {number}
         */
        this.id = clazz.id;
        /**
         * The class title
         * @readonly
         * @type {string}
         */
        this.title = clazz.title;
        /**
         * The class description
         * @readonly
         * @type {string}
         */
        this.description = clazz.description;
        /**
         * The creator's ID
         * @readonly
         * @type {number}
         */
        this.creatorId = clazz.creatorId;
        /**
         * The number of member's that this class contains
         * @readonly
         * @type {number}
         */
        this.numMembers = clazz._numMembers;
        /**
         * The number of set's that this class contains
         * @readonly
         * @type {number}
         */
        this.numSets = clazz._numSets;
    }

    /**
     * Get's all the members of a class
     * @async
     * @memberof Class
     * @instance
     * @returns {Promise<User[]>} The members
     */
    async getMembers() {
        var { user } = await RequestHandler.getAPI(`class-memberships?perPage=1000&filters[classId]=${this.id}&filters[isDeleted]=false&include[classMembership]=user`);
        return user.map(u => new User(u));
    }

    /**
     * Get's all the sets that a class contains
     * @memberof Class
     * @async
     * @instance
     * @returns {Promise<Set[]>} The sets
     */
    async getSets() {
        return await StudySet.getFromClass(this.id);
    }
}