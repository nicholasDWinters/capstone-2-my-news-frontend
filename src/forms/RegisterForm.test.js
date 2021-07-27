import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RegisterForm from './RegisterForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import initialState from '../stateTesting';


describe('testing login form', function () {

    let mockStore = configureStore();
    let store = mockStore(initialState);

    it("renders without crashing", function () {
        render(<Provider store={store}><MemoryRouter><RegisterForm /></MemoryRouter></Provider>);
    });

    it("allows a user to enter their info", function () {

        const { getByPlaceholderText, getByDisplayValue, queryAllByText } = render(<Provider store={store}><MemoryRouter><RegisterForm /></MemoryRouter></Provider>);
        let inputUsername = getByPlaceholderText('username');
        let inputPassword = getByPlaceholderText('password');
        let inputEmail = getByPlaceholderText('email');
        let btns = queryAllByText('register');
        fireEvent.change(inputUsername, { target: { value: 'nick7' } });
        fireEvent.change(inputPassword, { target: { value: 'ginger' } });
        fireEvent.change(inputEmail, { target: { value: 'blah@gmail.com' } });
        expect(getByDisplayValue('nick7')).toBeInTheDocument();
        expect(getByDisplayValue('blah@gmail.com')).toBeInTheDocument();


        fireEvent.click(btns[1]);
        expect(inputUsername).toBeEmptyDOMElement();
        expect(inputPassword).toBeEmptyDOMElement();
        expect(inputEmail).toBeEmptyDOMElement();

    });
});