import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from '../Note/Note';
import './NotesList.css';

class NotesList extends Component { 
    render(){
        return (
            <>
                <h2>Notes:</h2>
                <Link to='/add-note'>
                    <button>Add Note</button>
                </Link>
                <ul className="notesList">
                    <Note />
                </ul>
            </>
        )
    }
}

export default NotesList