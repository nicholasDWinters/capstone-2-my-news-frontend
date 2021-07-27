import React from "react";
import { render } from "@testing-library/react";
import MyArticles from './MyArticles';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import initialState from '../stateTesting';

describe('testing my articles page', function () {
    let mockStore = configureStore();
    let store = mockStore(initialState);
    let article = {
        "source": 'bbc news',
        "date": '2021-01-04',
        "author": 'nick winters',
        "title": 'running some tests',
        "description": 'this is the description',
        "url": 'blah.com',
        "image_url": 'blah.image.com',
        "content": 'this is some test content'
    }
    let store2 = mockStore({ ...initialState, userReducer: { user: 'nick', token: 'faketoken' }, articleReducer: { savedArticles: [article] } });

    it("renders without crashing", function () {

        render(<Provider store={store}><MemoryRouter><MyArticles /></MemoryRouter></Provider>);
    });

    it("shows message if no articles", function () {
        const { queryByText } = render(<Provider store={store}><MemoryRouter><MyArticles /></MemoryRouter></Provider>);
        expect(queryByText("you don't have any saved articles...")).toBeInTheDocument();
    });

    it("shows article if saved in state", function () {
        const { queryAllByText } = render(<Provider store={store2}><MemoryRouter><MyArticles /></MemoryRouter></Provider>);
        expect(queryAllByText("this is some test content")[0]).toBeInTheDocument();

    });

})