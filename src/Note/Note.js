import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import moment from 'moment';
import './Note.css';


class Note extends Component {
    static contextType = NotefulContext
    

    handleDeleteNote = e => {
        e.preventDefault()
        const noteId = this.props.id

        fetch(`http://localhost:9090/note/${noteId}`, {
            method: 'DELETE',
            headers: {
            'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
            return res.json()
        })
        .then(() => {
            this.context.deleteNote(noteId)
            
        })
        .catch(error => {
            console.error({error})
        })
    }

    render(){
        const noteItem = this.context.notes.map((note) => {
            return (
                <li className="note-items" key={note.id} >
                    <Link to={`/note/${note.id}`}>
                        <p>{note.name}</p>
                    </Link>
                    <p>Modified: {moment(note.modified).format("MMM Do YY")}</p>
                    <button onClick={this.handleDeleteNote}>delete</button>
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