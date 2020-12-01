import React, { Component } from 'react'
import Note from '../Note/Note';

class NotesList extends Component {
    render(){
        return (
            <ul>
                <Note noteData={this.props.noteData} />
            </ul>
        )
    }
}

export default NotesList