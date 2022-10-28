import got from "got";

export class QuizletAPIError extends Error {
    constructor(error) {
        super(error.message);
        this.code = error.code;
        this.type = error.identifier;
    }
}

export class QuizletLiveError extends Error {
    constructor(error) {
        super(error.message);
        this.username = error.id;
        this.type = error.type; 
    }
}

export class RequestHandler {
    static apiURL = "https://quizlet.com/webapi/3.9/"
    static headers = {"User-Agent":"quizlet.js"}
    static async getAPI(url) {
        var {responses} = await got(`${this.apiURL}${url}`, {headers: this.headers}).json();
        var response = responses[0];
        var {paging} = response;
        // check if request needs to fetch more data
        if (paging && (paging.perPage * paging.page < paging.total)) {
            var res2 = await this.getAPI(`${url}&pagingToken=${paging.token}&page=${paging.page+1}`);
            response.models[Object.keys(response.models)[0]] = response.models[Object.keys(response.models)[0]].concat(res2[Object.keys(res2)[0]])
        }
        if (response.error) throw new QuizletAPIError(response.error)
        return response.models
    }

    static async getSocket(url) {
        var response = await got(`https://mp.quizlet.com/${url}`, {headers:this.headers}).text();
        var json = JSON.parse(response.substring(response.indexOf("{")));
        if (json.code) throw new QuizletAPIError(json);
        return json;
    }
}