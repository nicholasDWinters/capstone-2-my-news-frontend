import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from './SearchForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import initialState from '../stateTesting';

describe('testing the search form', function () {
    let mockStore = configureStore();
    let store = mockStore(initialState);

    it("renders without crashing", function () {
        render(<Provider store={store}><MemoryRouter><SearchForm /></MemoryRouter></Provider>);
    });

    it("allows a search term to be entered", function () {

        const { getByPlaceholderText, getByDisplayValue } = render(<Provider store={store}><MemoryRouter><SearchForm /></MemoryRouter></Provider>);
        let input = getByPlaceholderText('pick a topic...');
        fireEvent.change(input, { target: { value: 'trump' } });

        expect(getByDisplayValue('trump')).toBeInTheDocument();

    });
})
