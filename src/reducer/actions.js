import {
    LOGIN, REGISTER, GET_TOPIC_ARTICLES, GET_TOP_HEADLINES, SAVE_ARTICLE, LOAD_ARTICLE_DETAILS,
    LOAD_SAVED_ARTICLES, REMOVE_ARTICLE, SET_USER
} from "./actionTypes";

import NewsApi from "../api/api";

/* actions for getting top headlines and topic articles from API */

export function getTopHeadlinesFromAPI() {
    return async function (dispatch) {
        try {
            let res = await NewsApi.getTopHeadlines();
            return dispatch(gotTopHeadlines(res));
        } catch (e) {
            console.log(e);
        }
    }
}

function gotTopHeadlines(articles) {
    return {
        type: GET_TOP_HEADLINES,
        articles
    }
}

export function getTopicArticlesFromAPI(topic) {
    return async function (dispatch) {
        try {
            let res = await NewsApi.getNews(topic);
            return dispatch(gotTopicArticles(res));
        } catch (e) {
            console.log(e);
        }
    }
}

function gotTopicArticles(articles) {
    return {
        type: GET_TOPIC_ARTICLES,
        articles
    }
}


/* actions for saving an article, getting the saved articles, loading a specific article's details,
and removing an article from a read list */

export function saveArticleToState(article) {
    return async function (dispatch) {
        try {
            let res = await NewsApi.saveArticle(article);
            return dispatch(savedArticle(res));
        } catch (e) {
            console.log(e);
        }
    }
}

function savedArticle(article) {
    return {
        type: SAVE_ARTICLE,
        article
    }
}

export function getSavedArticles() {
    return async function (dispatch) {
        try {
            let res = await NewsApi.getArticles();
            return dispatch(gotSavedArticles(res));
        } catch (e) {
            console.log(e);
        }
    }
}

function gotSavedArticles(articles) {
    return {
        type: LOAD_SAVED_ARTICLES,
        articles
    }
}

export function getArticle(id) {
    return async function (dispatch) {
        try {
            let res = await NewsApi.getArticle(id);
            return dispatch(gotArticle(res));
        } catch (e) {
            console.log(e);
        }
    }
}

function gotArticle(article) {
    return {
        type: LOAD_ARTICLE_DETAILS,
        article
    }
}

export function removeArticle(id) {
    return async function (dispatch) {
        try {
            let res = await NewsApi.deleteArticle(id);
            return dispatch(gotRemovedArticle(res));
        } catch (e) {
            console.log(e);
        }
    }
}

function gotRemovedArticle(id) {
    return {
        type: REMOVE_ARTICLE,
        id
    }
}

/* functions for user login and register */


export function loginUser(data) {
    return async function (dispatch) {
        try {
            let res = await NewsApi.login(data);
            return dispatch(loggedInUser(res));
        } catch (e) {
            console.log(e);
        }
    }
}

function loggedInUser(token) {
    return {
        type: LOGIN,
        token
    }
}

export function registerUser(data) {
    return async function (dispatch) {
        try {
            let res = await NewsApi.register(data);
            return dispatch(registeredUser(res));
        } catch (e) {
            console.log(e);
        }
    }
}

function registeredUser(token) {
    return {
        type: REGISTER,
        token
    }
}



export function setUser(data) {
    return {
        type: SET_USER,
        data
    }
}