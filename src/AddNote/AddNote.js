import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Folder from '../Folder/Folder';
import FolderList from '../FolderList/FolderList';
import NotefulContext from '../NotefulContext';
import './AddNote.css';

class AddNote extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    static contextType = NotefulContext;

    handleSubmit = e => {
        e.preventDefault()
            const newNote = {
                name: e.target['noteNameInput'].value,
                content: e.target['note-content-input'].value,
                folderId: e.target['note-folder-select'].value,
                modified: new Date(),
            }
        fetch('http://localhost:9090/notes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newNote),
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
            return res.json()
        })
        .then(note => {
            this.context.addNote(note)
            this.props.history.push(`/folder/${note.folderId}`)
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
        const { folders = [] } = this.context
        return(
            <div>
                <h2>Add Note</h2>
                <Link to='/'>
                    <button>Back</button>    
                </Link>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-section">
                        <label htmlFor="note-name-input">Note Name: </label>
                        <input type="text" id="noteNameInput" name="noteNameInput" />    
                    </div>
                    <div className="form-section">
                        <label htmlFor="note-content-input">Note Content: </label>
                        <textarea id="note-content-input" name="noteContentInput" />    
                    </div>
                    <div className="form-section">
                        <label htmlFor="note-folder-select">Folder: </label>
                        <select id="note-folder-select" name="note-folder-select">
                            <option value={null}>...</option>
                            {folders.map(folder =>
                                <option key={folder.id} value={folder.id}>
                                    {folder.name}
                                </option>
                            )}
                        </select>    
                    </div>
                    <div className="form-section">
                        <input type="submit" />
                    </div>                    
                </form>
            </div>
            
        )
    }
}

export default AddNote