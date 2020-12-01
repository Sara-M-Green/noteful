import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Note.css';

class Note extends Component {
    render(){
        const noteItem = this.props.noteData.map((note) => {
            return (
                <li className="note-items" key={note.id} >
                    <Link to={`/note/${note.id}`}>
                        <p>{note.name}</p>
                    </Link>
                    <p>Modified: {moment(note.modified).format("MMM Do YY")}</p>
                    <button>delete</button>
                </li>
            ) 
        })

        return (
            <div className="noteList">
                {noteItem}
            </div>
        )
    }
}

export default Note;