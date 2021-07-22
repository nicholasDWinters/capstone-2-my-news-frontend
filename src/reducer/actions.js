import {
    LOGIN, REGISTER, LOGOUT, GET_TOPIC_ARTICLES, GET_TOP_HEADLINES, SAVE_ARTICLE, LOAD_ARTICLE_DETAILS,
    LOAD_SAVED_ARTICLES, REMOVE_ARTICLE, SET_USER, ADD_ALERT, CLEAR_ALERT
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
            // return dispatch(addAlert({ "message": e, "color": "danger" }));
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
            // return dispatch(addAlert({ "message": e, "color": "danger" }));
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
            return dispatch(addAlert({ "message": e, "color": "danger" }))
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
            return dispatch(addAlert({ "message": e, "color": "danger" }));
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
            return dispatch(addAlert({ "message": e, "color": "danger" }));
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
            return dispatch(addAlert({ "message": e, "color": "danger" }));
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
            dispatch(addAlert({ "message": `welcome back!`, "color": "info" }))
            return dispatch(loggedInUser(res));
        } catch (e) {
            console.log(e);
            return dispatch(addAlert({ "message": e, "color": "danger" }));
        }
    }
}

function loggedInUser(token) {
    return {
        type: LOGIN,
        token
    }
}

export function isLoggedIn(data) {
    return async function (dispatch) {
        try {
            dispatch(addAlert({ "message": `welcome back!`, "color": "info" }))
            return dispatch(loggedInUser(data));
        } catch (e) {
            console.log(e);
            return dispatch(addAlert({ "message": e, "color": "danger" }));
        }
    }
}

export function registerUser(data) {
    return async function (dispatch) {
        try {
            let res = await NewsApi.register(data);
            dispatch(addAlert({ "message": `thank you for registering!`, "color": "info" }))
            return dispatch(registeredUser(res));
        } catch (e) {
            return dispatch(addAlert({ "message": e, "color": "danger" }));
        }
    }
}

function registeredUser(token) {
    return {
        type: REGISTER,
        token
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}



export function setUser(data) {
    return {
        type: SET_USER,
        data
    }
}

// actions for setting alerts - used for errors, login, logout, etc
export function addAlert(alert) {
    return {
        type: ADD_ALERT,
        alert
    }
}

export function clearAlert() {
    return {
        type: CLEAR_ALERT

    }
}