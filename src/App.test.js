import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import initialState from './stateTesting';

describe('testing app', function () {

  beforeEach(function () {
    localStorage.clear();
  });

  let mockStore = configureStore();
  let store = mockStore(initialState);
  let savedArticle = {
    "source": {
      "name": 'bbc news'
    },
    "date": '2021-01-04',
    "author": 'nick winters',
    "title": 'running some tests',
    "description": 'this is the description',
    "url": 'blah.com',
    "urlToImage": 'blah.image.com',
    "content": 'this is some test content1'
  }
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
  let store2 = mockStore({ ...initialState, userReducer: { user: 'nick', token: 'faketoken' }, articleReducer: { topHeadlines: [...articles], topicArticles: [...articles], savedArticles: [savedArticle] } });


  it("renders without crashing", function () {
    render(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>);
  });

  it("renders correctly with no user", function () {
    const { queryByText } = render(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>);
    expect(queryByText('register')).toBeInTheDocument();
  });

  it("renders correctly with user", function () {
    const { queryByText } = render(<Provider store={store2}><MemoryRouter><App /></MemoryRouter></Provider>);
    expect(queryByText('my articles')).toBeInTheDocument();
  });

  it("can visit other pages", function () {
    const { queryByText } = render(<Provider store={store2}><MemoryRouter><App /></MemoryRouter></Provider>);
    let btn = queryByText('my articles');
    fireEvent.click(btn);
    expect(queryByText('running some tests')).toBeInTheDocument();
    expect(queryByText('running some tests2')).not.toBeInTheDocument();
  });

})