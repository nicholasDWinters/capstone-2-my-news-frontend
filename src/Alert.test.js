import React from "react";
import { render } from "@testing-library/react";
import Alert from './Alert';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import initialState from './stateTesting';

describe('tests for the alert', function () {

    let mockStore = configureStore();
    let store = mockStore(initialState);
    it("renders without crashing", function () {
        render(<Provider store={store}><MemoryRouter><Alert /></MemoryRouter></Provider>);
    });

    let store2 = mockStore({ ...initialState, alertReducer: { alert: { "message": "successfully saved", "color": "info" } } })

    it('renders an alert correctly', function () {
        const { getByText } = render(<Provider store={store2}><MemoryRouter><Alert /></MemoryRouter></Provider>);
        expect(getByText('successfully saved')).toBeInTheDocument();

    })
})