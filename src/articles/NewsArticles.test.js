import React from "react";
import { render } from "@testing-library/react";
import NewsArticles from './NewsArticles';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import initialState from '../stateTesting';

describe('testing news articles component', function () {
    let mockStore = configureStore();
    let store = mockStore(initialState);
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
        "title": 'running some tests2',
        "description": 'this is the description',
        "url": 'blah2.com',
        "urlToImage": 'blah.image.com',
        "content": 'this is some test content2'
    }]
    let store2 = mockStore({ ...initialState, userReducer: { user: 'nick', token: 'faketoken' }, articleReducer: { topicArticles: [...articles], savedArticles: [articles[0]] } });

    it("renders without crashing", function () {
        render(<Provider store={store}><MemoryRouter><NewsArticles /></MemoryRouter></Provider>);
    });

    it("shows message if no articles", function () {
        const { queryByText } = render(<Provider store={store}><MemoryRouter><NewsArticles /></MemoryRouter></Provider>);

        expect(queryByText('could not find articles about ...')).toBeInTheDocument();
    });

    it("shows article if saved in topic article state", function () {
        const { queryAllByText, queryByText } = render(<Provider store={store2}><MemoryRouter><NewsArticles /></MemoryRouter></Provider>);

        expect(queryByText('running some tests')).toBeInTheDocument();
        expect(queryAllByText('go to article')[0]).toBeInTheDocument();
    });
})
