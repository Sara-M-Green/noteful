import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import moment from 'moment';
import './Note.css';


class Note extends Component {
    static contextType = NotefulContext

    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    static defaultProps = {
        handleDeleteNote: () => {},
    }
    

    handleDeleteNote = (e, noteId) => {
        e.preventDefault()
        

        fetch(`http://localhost:8000/api/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
            'content-type': 'application/json'
            },
        }) 
        .then(res => {
            console.log(res)
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
            this.context.deleteNote(noteId) 
        })
        .catch(error => {
            console.error({error})
        })
    }

    render(){
        const noteItem = this.context.selectedNotes.map((note) => {
            return (

                    <li className="note-items" key={note.id} >
                        <Link className="Link" to={`/notes/${note.id}`}>
                            <p className="noteTitle">{note.note_name}</p>
                        </Link>
                        <p>Modified: {moment(note.modified).format("MMM Do YY")}</p>
                        <button onClick={(e) => this.handleDeleteNote(e, note.id)}>delete</button>
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

export default withRouter(Note);