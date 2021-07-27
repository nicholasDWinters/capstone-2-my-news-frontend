import articleReducer from "./articleReducer";
import {
    GET_TOP_HEADLINES, GET_TOPIC_ARTICLES, SAVE_ARTICLE, LOAD_SAVED_ARTICLES, REMOVE_ARTICLE
} from "./actionTypes";

describe('article reducer tests', () => {
    const INITIAL_STATE = { topHeadlines: [], topicArticles: [], savedArticles: [], articleDetails: {} };
    let articles = [{
        "source": {
            "name": 'bbc news'
        },
        "publishedAt": '2021-01-04',
        "author": 'nick winters',
        "title": 'running some tests',
        "description": 'this is the description',
        "url": 'blah.com',
        "urlToImage": 'blah.image.com',
        "content": 'this is some test content1'
    }, {
        "source": {
            "name": 'bbc news'
        },
        "publishedAt": '2021-01-04',
        "author": 'nick winters',
        "title": 'running some tests',
        "description": 'this is the description',
        "url": 'blah2.com',
        "urlToImage": 'blah.image.com',
        "content": 'this is some test content2'
    }]
    let article = {
        "id": 1,
        "username": "nick",
        "source": 'bbc news',
        "date": '2021-01-04',
        "author": 'nick winters',
        "title": 'running some tests',
        "description": 'this is the description',
        "url": 'blah.com',
        "image_url": 'blah.image.com',
        "content": 'this is some test content'
    }
    const expectedHeadlinesState = { topHeadlines: articles, topicArticles: [], savedArticles: [], articleDetails: {} };
    const expectedTopicState = { topHeadlines: [], topicArticles: articles, savedArticles: [], articleDetails: {} };
    const expectedSavedState = { topHeadlines: [], topicArticles: [], savedArticles: [article], articleDetails: {} };


    it('initial state works', () => {
        const action = { type: 'dummy_action' };
        expect(articleReducer(undefined, action)).toEqual(INITIAL_STATE);
    });

    it('modifies top headlines state', () => {
        const action = { type: GET_TOP_HEADLINES, articles };
        expect(articleReducer(undefined, action)).toEqual(expectedHeadlinesState);
    })

    it('modifies topic articles state', () => {
        const action = { type: GET_TOPIC_ARTICLES, articles };
        expect(articleReducer(undefined, action)).toEqual(expectedTopicState);
    })

    it('modifies saved article state', () => {
        const action = { type: SAVE_ARTICLE, article };
        expect(articleReducer(undefined, action)).toEqual(expectedSavedState);
    })

    it('loads saved articles', () => {
        const action = { type: SAVE_ARTICLE, article };
        articleReducer(undefined, action);

        const action2 = { type: LOAD_SAVED_ARTICLES, articles: [article] };
        expect(articleReducer(undefined, action2)).toEqual(expectedSavedState);
    })

    it('removes a saved article', () => {
        const action = { type: SAVE_ARTICLE, article };
        articleReducer(undefined, action);
        expect(articleReducer(undefined, action)).toEqual(expectedSavedState);
        const action2 = { type: REMOVE_ARTICLE, id: 1 };
        expect(articleReducer(undefined, action2)).toEqual(INITIAL_STATE);
    })
})