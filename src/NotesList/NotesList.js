import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from '../Note/Note';

class NotesList extends Component {

    render(){
        return (
            <>
                <h2>Notes</h2>
                <Link to='/add-note'>
                    <button>Add Note</button>
                </Link>
                <ul>
                    <Note />
                </ul>
            </>
        )
    }
}

export default NotesList