import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginForm from './LoginForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import initialState from '../stateTesting';

describe('testing login form', function () {

    let mockStore = configureStore();
    let store = mockStore(initialState);

    it("renders without crashing", function () {
        render(<Provider store={store}><MemoryRouter><LoginForm /></MemoryRouter></Provider>);
    });

    it("allows a user to enter their login info", function () {

        const { getByPlaceholderText, getByDisplayValue, queryAllByText } = render(<Provider store={store}><MemoryRouter><LoginForm /></MemoryRouter></Provider>);
        let inputUsername = getByPlaceholderText('username');
        let inputPassword = getByPlaceholderText('password');
        let btns = queryAllByText('login');
        fireEvent.change(inputUsername, { target: { value: 'nick7' } });
        fireEvent.change(inputPassword, { target: { value: 'ginger' } });
        expect(getByDisplayValue('nick7')).toBeInTheDocument();
        fireEvent.click(btns[1]);

    });
});
