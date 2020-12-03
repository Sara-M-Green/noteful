import React, { Component } from 'react'
import Note from '../Note/Note';

class NotesList extends Component {
    render(){
        return (
            <ul>
                <Note />
            </ul>
        )
    }
}

export default NotesList