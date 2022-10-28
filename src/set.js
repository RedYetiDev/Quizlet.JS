import { RequestHandler } from './api.js';
import User from './user.js';

export default class StudySet {
    /**
     * Get a set via it's ID
     * @param {(string|number)} id The set ID
     * @returns {Promise<StudySet>} The set
     * @memberof StudySet
     * @async
     */
    static async getByID(id) {
        var {set: [set]} = await RequestHandler.getAPI(`sets/${id}`);
        return new this(set);
    }

    /**
     * Gets a list of sets from a user
     * @param {(string|number)} id The user's ID
     * @returns {Promise<Set[]>} The sets
     * @memberof StudySet
     * @async
     */
    static async getFromUser(id) {
        var {set} = await RequestHandler.getAPI(`sets?perPage=1000&filters[creatorId]=${id}&filters[isDeleted]=false`);
        return set.map(s => new this(s));
    }

    /**
     * Gets a list of sets from a class
     * @param {(string|number)} id The class ID
     * @returns {Promise<Set[]>} The sets
     * @async
     * @memberof StudySet
     */
    static async getFromClass(id) {
        var {set} = await RequestHandler.getAPI(`class-sets?filters[classId]=${id}&filters[isDeleted]=false&include[classSet]=set`);
        return set.map(s => new this(s))
    }

    /**
     * Gets a list of sets included in a folder
     * @param {(string|number)} id The folder ID
     * @returns {Promise<Set[]>} The list of sets
     * @memberof StudySet
     * @async
     */
    static async getFromFolder(id) {
        var {set} = await RequestHandler.getAPI(`folder-sets?filters[folderId]=${id}&filters[isDeleted]=false&include[folderSet]=set`);
        return set.map(s => new this(s));
    }

    /**
     * @constructs StudySet
     * @hideconstructor
     * @param {object} set The raw set data
     */
    constructor(set) {
        /**
         * The set's access URL
         * @type {string}
         * @readonly
         */
        this.url = set._webUrl;
        /**
         * The set's ID
         * @type {number}
         * @readonly
         */
        this.id = set.id;
        /**
         * The set creator's ID
         * @type {number}
         * @readonly
         */
        this.creatorId = set.creatorId;
        /**
         * The set's term language
         * @type {string}
         * @readonly
         */
        this.termLang = set.wordLang;
        /**
         * The set's definition language
         * @type {string}
         * @readonly
         */
        this.defLang = set.defLang;
        /**
         * The set's title
         * @type {string}
         * @readonly
         */
        this.title = set.title;
        /**
         * The set's description
         * @type {string}
         * @readonly
         */
        this.description = set.description;
        /**
         * The set's thumbnail
         * @type {string}
         * @readonly
         */
        this.thumbnail = set._thumbnailUrl;
        /**
         * The number of terms in this set
         * @type {number}
         * @readonly
         */
        this.numTerms = set.numTerms;

    }

    /**
     * Gets the terms included in a set
     * @async
     * @instance
     * @memberof StudySet
     * @returns {Promise<Term[]>} The terms
     */
    async getTerms() {
        var {term} = await RequestHandler.getAPI(`terms?perPage=1000&filters[setId]=${this.id}`);
        return term.map(t => new Term(t));
    }

    /**
     * Gets the creator of a set
     * @async
     * @instance
     * @memberof StudySet
     * @returns {Promise<User>} The creator
     */
    async getCreator() {
        return await User.getByID(this.creatorId);
    }
};

export class Term {
    /**
     * A Term. This constructor is not intended to be used. It is private only
     * @constructs Term
     * @hideconstructor
     * @param {object} t The raw term data
     */
    constructor(t) {
        /**
         * The term
         * @type {object}
         * @readonly
         * @property {string} text The term's text
         * @property {string} audio The term's text's audio (Usually a Text-To-Speech)
         */
        this.term = {
            text: t.word,
            audio: t._wordAudioUrl
        }
        /**
         * The definition
         * @type {object}
         * @readonly
         * @property {string} text The definition's text
         * @property {string} audio The definition's text's audio (Usually a Text-To-Speech)
         */
        this.definition =  {
            text: t.definition,
            audio: t._definitionAudioUrl
        }

        /**
         * The term's index/rank
         * @type {number}
         * @readonly
         */
        this.rank = t.rank;
        /**
         * The term's image URL
         * @type {string}
         * @readonly
         */
        this.image = t._imageUrl;
        /**
         * The term's set ID
         * @type {number}
         * @readonly
         */
        this.setId = t.setId;
        /**
         * The term's ID
         * @type {number}
         * @readonly
         */
        this.id = t.id;
    }
}