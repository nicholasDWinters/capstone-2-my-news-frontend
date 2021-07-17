import {
    GET_TOP_HEADLINES, GET_TOPIC_ARTICLES, SAVE_ARTICLE, LOAD_SAVED_ARTICLES,
    LOAD_ARTICLE_DETAILS, REMOVE_ARTICLE
} from "./actionTypes";

const INITIAL_STATE = { topHeadlines: [], topicArticles: [], savedArticles: [], articleDetails: {} };

function articleReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_TOP_HEADLINES:
            return { ...state, topHeadlines: action.articles };
        case GET_TOPIC_ARTICLES:
            return { ...state, topicArticles: action.articles };
        case SAVE_ARTICLE:
            return { ...state, savedArticles: [...state.savedArticles, action.article] };
        case LOAD_SAVED_ARTICLES:
            return { ...state, savedArticles: [...action.articles] };
        case LOAD_ARTICLE_DETAILS:
            return { ...state, articleDetails: { ...action.article } };
        case REMOVE_ARTICLE:
            return { ...state, savedArticles: state.savedArticles.filter(article => article.id !== action.id) };
        default:
            return state;
    }
}

export default articleReducer;