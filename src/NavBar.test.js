import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import initialState from './stateTesting';

describe('navbar testing', function () {

    let mockStore = configureStore();
    let store = mockStore(initialState);
    let store2 = mockStore({ ...initialState, userReducer: { user: 'nick', token: 'faketoken' } })
    it("renders without crashing", function () {
        render(<Provider store={store}><MemoryRouter><NavBar /></MemoryRouter></Provider>);
    });

    it("shows login button with no current user", function () {
        const { getByText } = render(<Provider store={store}><MemoryRouter><NavBar /></MemoryRouter></Provider>);
        expect(getByText('login')).toBeInTheDocument();
    });

    it("shows my articles button with a current user", function () {
        const { getByText } = render(<Provider store={store2}><MemoryRouter><NavBar /></MemoryRouter></Provider>);
        expect(getByText('my articles')).toBeInTheDocument();
    });

})