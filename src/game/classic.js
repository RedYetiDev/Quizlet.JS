import { io } from "socket.io-client";
import { QuizletLiveError, QuizletAPIError, RequestHandler } from "../api.js";
import StudySet, { Term } from "../set.js";
import Live from "./live.js";
import got from "got";
/**
 * The classic game client
 * @class Classic
 * @extends Live
 */
export default class Classic extends Live {
    /**
     * Get the game instance. This method's return object is not types as of now, because you honestly won't ever need this method. But I may add types in the future
     * 
     * @async
     * @memberof Live
     * 
     * @param {string} code The game code
     * @returns {Promise<Object>} The game instance
     * @throws {QuizletAPIError}
     */
    static async getGame(code) {
        var response = await got(`${RequestHandler.apiURL}multiplayer/game-instance?gameCode=${code}`, {
            headers: RequestHandler.headers,
            throwHttpErrors: false
        }).json();
        console.log(response)
        if (response.error) throw new QuizletAPIError(response.error);
        return response.gameInstance;
    }

    /**
     * Join a game
     * 
     * @async
     * @memberof live
     * @instance
     * 
     * @throws {QuizletLiveError}
     * @param {string} pin The game PIN
     * @param {string} name The username
     * @param {string} image The client's avatar
     * 
     * @fires Classic#answer
     * @fires Classic#replay
     */
    async joinGame(pin, name, image) {
        await super.joinGame(pin, name, image);
        
        /**
         * The game instance
         * @readonly
         * @type {object}
         */
        this.gameInstance = await Classic.getGame(this.pin);

        /**
         * The game statuses
         * @readonly
         * @type {string[]}
         */
        this.statuses = [];

        // attach to socket
        /**
         * The game socket
         * @readonly
         */
        this.socket = io(`https://mp.quizlet.com`, {
            path: `/${this.gameInstance.serverBasePath}/games/socket/`,
            extraHeaders: RequestHandler.headers,
            query: {
                token: this.token,
                gameId: this.pin
            }
        });

        this.socket.on("disconnect", (reason) => {
            if (reason === "transport error") {
                this.socket.connect();
            }
        })

        // await socket connection (edit in the future maybe)
        await new Promise((resolve, reject) => {
            this.socket.once("connect_error", reject);
            this.socket.once("connect", resolve);
        })

        // setup events
        // Ingored Events: 
        this.socket.once("current-game-state", (state) => {
            /**
             * The game's study set
             * @type {StudySet}
             * @readonly
             */
            this.set = new StudySet(state.set); // Not needed, but helpful for the user
            /**
             * The term's included in this game
             * @type {Term[]}
             * @readonly
             */
            this.terms = state.terms.map(t => new Term(t));
            /**
             * The game's type (2=Team, other=Singleplayer)
             * @type {number}
             * @readonly
             */
            this.type = state.type;
        })

        this.socket.on("current-game-state", this.#handleState.bind(this));
        this.socket.on("current-game-state-and-set", this.#handleState.bind(this));

        this.socket.on("matchteam.new-answer", (answer) => {
            /**
             * Fired when an answer has been evaluated
             * @event Classic#answer
             * @type {object}
             * @property {number} streak The "streak" corresponds to how many attempts have been made from this team. When you get an answer wrong, your place resets to 0, and +1 is added to "streak"
             * @property {number} index The index corresponds to the current question index
             * @property {boolean} isCorrect Whether the question was answered correctly
             * @property {object} answeredBy Who answered this question?
             * @property {Term} answeredWith The term that the player chose as their answer
             * @property {Date} answeredAt When the question was answered
             */
            this.emit("answer", {
                streak: answer.streakNum,
                index: answer.round,
                isCorrect: answer.answer.isCorrect,
                answeredBy: this.players[answer.answer.playerId],
                answeredWith: this.terms.find(term => term.id === answer.answer.termId),
                answeredAt: new Date(answer.submissionTime) // Not needed
            });
            if (this.team.players.includes(answer.answer.playerId)) this.#handleQuestion();
        })

        this.socket.on("matchteam.new-streak", () => {
            this.streak += 1;
        })

        this.socket.on("replay-game", () => {
            /**
             * Fired when the host replays the game
             * @event Classic#replay
             */
            this.emit("replay");
        })

        this.socket.on("game-error", (error) => {
            Promise.reject(new QuizletLiveError(error))
        })

        // join the game
        this.socket.emit("player-join", { username: this.name, image: this.image }) // TODO: Check avatar url

    }

    /**
     * @memberof Classic
     * @instance
     * @private
     * 
     * @param {object} state The game state
     * @fires Classic#lobby
     * @fires Classic#teams
     * @fires Classic#ended
     * @fires Classic#start
     * @throws {Error}
     */
    #handleState(state) {
        try {
            var newStatuses = state.statuses.filter(s => !this.statuses.includes(s));
            var keptStatuses = state.statuses.filter(s => this.statuses.includes(s));

            if (state.teams.length > 0) {
                /**
                 * The teams within the game
                 * @readonly
                 * @type {object[]}
                 */
                this.teams = state.teams; // Teams update each time with the streak changes
                /**
                 * My team
                 * @readonly
                 * @type {object}
                 */
                this.team = state.teams.find(team => team.players.includes(this.id));
            }

            if (newStatuses.includes("lobby") || (state.statuses.length < this.statuses.length && keptStatuses[0] === "lobby")) {
                // We are in the lobby; Waiting
                /**
                 * Fired when the player enters the lobby
                 * @event Classic#lobby
                 */
                this.emit("lobby");
            } else if (state.statuses.filter(s => s == "assign_teams").length > this.statuses.filter(s => s == "assign_teams").length) {
                /**
                 * Fired when teams are assigned
                 * @event Classic#teams
                 * @type {object}
                 * @property {object} myTeam
                 * @property {object[]} allTeams
                 */
                this.emit("teams", {
                    myTeam: this.team,
                    allTeams: this.teams
                })
            } else if (newStatuses.includes("ended")) {
                this.active = false;
                /**
                 * Fired when the game ends
                 * @event Classic#ended
                 */
                this.emit("ended")
            } else if (newStatuses.includes("playing")) {
                /**
                 * Fired when the game starts
                 * @event Classic#start
                 */
                this.emit("started")
                this.active = true;
                /**
                 * The current question index
                 * @readonly
                 * @type {number}
                 */
                this.index = -1;
                /**
                 * The current streak; or attempt
                 * @readonly
                 * @type {number}
                 */
                this.streak = 0;
                this.#handleQuestion();
            }

            this.statuses = state.statuses; // Needed
            /**
             * The players currently in the game
             * @readonly
             * @type {object}
             */
            this.players = state.players; // Needed [move to only while in lobby]
            /**
             * The game options
             * @readonly
             * @type {object}
             */
            this.gameOptions = state.options; // IDK if I need [move to only while in lobby]
        } catch (e) {
            Promise.reject(e);
        }
    }

    /**
     * @memberof Classic
     * @instance
     * @private
     * 
     * @throws {Error}
     * 
     * @fires Classic#question
     */
    #handleQuestion() {
        try {
            this.index += 1;

            var term = this.terms.find(term => term.id === this.team.streaks[this.streak].prompts[this.index]);

            if (this.type === 2) {
                /**
                 * Emitted when the client needs to answer a question
                 * @event Classic#question
                 * @type {object}
                 * @property {Term} question
                 * @property {Term[]} options
                 */
                this.emit("question", {
                    question: term,
                    options: this.team.streaks[this.streak].roundTerms[this.index].map(termId => this.terms.find(term => term.id === termId))
                });
            } else {
                var myTerms = this.team.streaks[this.streak].terms[this.id];
                if (myTerms.includes(term.id)) {
                    /**
                     * Emitted when the client needs to answer a question
                     * @event Classic#question
                     * @type {object}
                     * @property {Term} question
                     * @property {Term[]} options
                     */
                    this.emit("question", {
                        question: term,
                        options: myTerms.map(termId => this.terms.find(term => term.id === termId))
                    });
                }
            }
        } catch (e) {
            Promise.reject(e)
        }
    }

    /**
     * @memberof Classic
     * @instance
     * 
     * @throws {Error}
     * 
     * @param {(string|number|Term)} answer The question's answer. If the type is "string", then the answer is considered a written answer, or the text content of the answer. If the type is "number", the answer is considered the index of the answer within the "options" array. If the type is "Term", then the answer is considered the answer. 
     */
    answer(answer) {
        try {
            if (!this.active) throw new Error("Game is not active");

            switch (typeof answer) {
                case "string":
                    var termId = this.terms.find(term => term[this.gameOptions.answerWith === 1 ? "term" : "definition"].text.toLowerCase() == answer.toLowerCase()).id;
                    break;
                case "number":
                    var termId = answer;
                    break;
                case "object":
                    if (answer instanceof Term) {
                        var termId = answer.id;
                        break;
                    };
                default:
                    Promise.reject(new Error(`Answer must be a string, number, or an instance of Term. Instead, got ${answer} of type ${typeof answer}`))
            }
            
            this.socket.emit("matchteam.submit-answer", { "streak": this.streak, "round": this.index, "termId": termId, "submissionTime": Date.now() })
        } catch (e) {
            Promise.reject(e);
        }
    }
};
