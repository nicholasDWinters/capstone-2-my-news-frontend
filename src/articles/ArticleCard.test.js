import React from "react";
import { render } from "@testing-library/react";
import ArticleCard from './ArticleCard';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import initialState from '../stateTesting';

describe('article card testing', function () {
    beforeEach(function () {
        localStorage.clear();
    })

    let mockStore = configureStore();
    let store = mockStore(initialState);
    let store2 = mockStore({ ...initialState, userReducer: { user: 'nick', token: 'faketoken' } });
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
    let store3 = mockStore({ ...initialState, userReducer: { user: 'nick', token: 'faketoken' }, articleReducer: { savedArticles: [article] } });

    it("renders without crashing", function () {
        render(<Provider store={store}><MemoryRouter><ArticleCard key={article.url} source={article.source.name} author={article.author}
            title={article.title} description={article.description} url={article.url} imageUrl={article.urlToImage}
            date={article.date} content={article.content} /></MemoryRouter></Provider>);
    });

    it("renders correctly with no user", function () {
        const { queryByText } = render(<Provider store={store}><MemoryRouter><ArticleCard key={article.url} source={article.source.name} author={article.author}
            title={article.title} description={article.description} url={article.url} imageUrl={article.urlToImage}
            date={article.date} content={article.content} /></MemoryRouter></Provider>);
        expect(queryByText('add to read list')).not.toBeInTheDocument();
        expect(queryByText('go to article')).toBeInTheDocument();
    });


    it("renders correctly with user", function () {
        localStorage.setItem('token', 'faketoken');
        const { queryByText } = render(<Provider store={store2}><MemoryRouter><ArticleCard key={article.url} source={article.source.name} author={article.author}
            title={article.title} description={article.description} url={article.url} imageUrl={article.urlToImage}
            date={article.date} content={article.content} /></MemoryRouter></Provider>);
        let btn = queryByText('add to read list');
        expect(btn).toBeInTheDocument();

    });

    it("renders correctly with user and saved article", function () {
        localStorage.setItem('token', 'faketoken');
        const { queryByText } = render(<Provider store={store3}><MemoryRouter><ArticleCard key={article.url} source={article.source.name} author={article.author}
            title={article.title} description={article.description} url={article.url} imageUrl={article.urlToImage}
            date={article.date} content={article.content} /></MemoryRouter></Provider>);
        let btn = queryByText('remove from read list');
        expect(btn).toBeInTheDocument();

    });
})