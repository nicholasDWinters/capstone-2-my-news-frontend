import React from "react";
import { render } from "@testing-library/react";
import ArticlesList from './ArticlesList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import initialState from '../stateTesting';

describe('articles list testing', function () {

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
        "title": 'running some tests',
        "description": 'this is the description',
        "url": 'blah2.com',
        "urlToImage": 'blah.image.com',
        "content": 'this is some test content2'
    }]

    it("renders without crashing", function () {
        render(<Provider store={store}><MemoryRouter><ArticlesList articles={articles} /></MemoryRouter></Provider>);
    });

    it("renders article cards", function () {
        const { queryByText, queryAllByText } = render(<Provider store={store}><MemoryRouter><ArticlesList articles={articles} /></MemoryRouter></Provider>);
        expect(queryByText('this is some test content2')).toBeInTheDocument();
        expect(queryByText('this is some test content1')).toBeInTheDocument();
        expect(queryAllByText('go to article')[0]).toBeInTheDocument();
    });
})