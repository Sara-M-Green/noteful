import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NotesList from './NotesList';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <NotesList />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})