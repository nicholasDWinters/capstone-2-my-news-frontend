import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import initialState from './stateTesting';

describe('testing home component', function () {
    let mockStore = configureStore();
    let store = mockStore(initialState);

    it("renders without crashing", function () {
        render(<Provider store={store}><MemoryRouter><Home /></MemoryRouter></Provider>);
    });

    it("renders correctly", function () {
        const { getByText } = render(<Provider store={store}><MemoryRouter><Home /></MemoryRouter></Provider>);
        expect(getByText('top headlines')).toBeInTheDocument();
    });
})