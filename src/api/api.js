import axios from "axios";
import API_KEY from "./secret";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const API_HEADER = { 'X-Api-Key': `${API_KEY}` };
/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class NewsApi {
    // the token for interacting with the API will be stored here.
    static token;


    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        //passing the user token in through the authorization header, while the API token is being passed via X-Api-Key header
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { authorization: `Bearer ${NewsApi.token}` };
        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API routes


    //get top 20 headlines from the US
    static async getTopHeadlines() {
        let res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=20`, { headers: API_HEADER });
        return res.articles;
    }

    //get 20 articles about specific topic
    static async getNews(topic) {
        let res = await axios.get(`https://newsapi.org/v2/everything?q=${topic}&pageSize=20`, { headers: API_HEADER });
        return res.articles;
    }

    // Saves an article to user's read list
    static async saveArticle(article) {
        let res = await this.request(`articles`, article, 'post');
        return res.article;
    }

    /** Get articles for the logged in user */
    static async getArticles() {
        let res = await this.request(`articles`);
        return res.articles;
    }


    // Get info about a specific article
    static async getArticle(id) {
        let res = await this.request(`articles/${id}`);
        return res.article;
    }

    // Deletes an article from a user's read list
    static async deleteArticle(id) {
        let res = await this.request(`articles/${id}`, 'delete');
        return res.deleted;
    }

    // login to site, get token

    static async login(data) {
        let res = await this.request(`auth/token`, data, 'post');
        return res.token;
    }

    //  sign up for site
    static async register(data) {
        let res = await this.request(`auth/register`, data, 'post');
        return res.token;
    }

}

export default NewsApi;