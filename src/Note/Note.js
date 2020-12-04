import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import moment from 'moment';
import './Note.css';


class Note extends React.Component {
    static defaultProps = {
        handleDeleteNote: () => {},
    }
    
    static contextType = NotefulContext
    

    handleDeleteNote = (e, noteId) => {
        e.preventDefault()
        
        console.log(noteId)

        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
            'content-type': 'application/json'
            },
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
        const noteItem = this.context.selectedNotes.map((note) => {
            return (
                <li className="note-items" key={note.id} >
                    <Link to={`/note/${note.id}`}>
                        <p>{note.name}</p>
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