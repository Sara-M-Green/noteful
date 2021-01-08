import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ValidationError from '../ValidationError/ValidationError'
import NotefulContext from '../NotefulContext';
import './AddNote.css';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            },
            folderSelect: {
                value: null,
                touched: false
            }
        }
    }

    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    static contextType = NotefulContext;

    handleSubmit = e => {
        e.preventDefault()
        const newNote = {
            note_name: e.target['noteNameInput'].value,
            content: e.target['noteContentInput'].value,
            folder: e.target['noteFolderSelect'].value,
            modified: new Date(),
          }
            
        fetch('http://localhost:8000/api/notes', {
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
            this.props.history.push(`/folders/${note.folder}`)
        })
        .catch(error => {
            console.error({ error })
        })
    }

    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    updateContent(content) {
        this.setState({content: {value: content, touched: true}});
    }

    updatefolderSelect(folderSelect) {
        this.setState({folderSelect: {value: folderSelect, touched: true}});
    }


    validateNoteName(){
        const name = this.state.name.value.trim();
        if (name.length === 0){
            return "Note name required"
        }
    }

    validateNoteContent(){
        const content = this.state.content.value.trim();
        if (content.length === 0) {
            return "Note content required"
        } 
    }

    validateFolderInput(){
        const folderSelect = this.state.folderSelect.value;
        if(folderSelect === null) {
            return "Please select a folder"
        }
    }

    render() {
        const { folders = [] } = this.context
        const nameError = this.validateNoteName();
        const contentError = this.validateNoteContent();
        const folderError = this.validateFolderInput();


        return(
            <div>
                <h2>Add Note</h2>
                <Link to='/'>
                    <button>Back</button>    
                </Link>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-section">
                        <label htmlFor="noteNameInput">Note Name: </label>
                        <input 
                            type="text" 
                            id="noteNameInput" 
                            name="noteNameInput" 
                            onChange={e => this.updateName(e.target.value)}
                            aria-label="noteNameInput"
                            aria-required="true"
                         /> 
                        {this.state.name.touched && (
                            <ValidationError message={nameError} />
                        )}
                           
                    </div>
                    <div className="form-section">
                        <label htmlFor="noteContentInput">Note Content: </label>
                        <textarea 
                            id="noteContentInput" 
                            name="noteContentInput" 
                            onChange={e => this.updateContent(e.target.value)}
                            aria-label="noteContentInput"
                            aria-required="true"
                        />
                        {this.state.content.touched && (
                            <ValidationError message={contentError} />
                        )}
                              
                    </div>
                    <div className="form-section">
                        <label htmlFor="noteFolderSelect">Folder: </label>
                        <select 
                            id="noteFolderSelect" 
                            name="noteFolderSelect" 
                            onChange={e => this.updatefolderSelect(e.target.value)}
                            aria-label="noteFolderSelect"
                            aria-required="true"
                        >
                            <option value={null}>...</option>
                            {folders.map(folder =>
                                <option key={folder.id} value={folder.id}>
                                    {folder.folder_name}
                                </option>
                            )}
                        </select>
                        {this.state.folderSelect.touched && (
                            <ValidationError message={folderError} />
                        )}
                              
                    </div>
                    <div className="form-section">
                        <input 
                            type="submit"
                            disabled={
                                this.validateNoteName() ||
                                this.validateNoteContent() ||
                                this.validateFolderInput()
                            }
                            />
                    </div>                    
                </form>
            </div>
            
        )
    }
}

export default AddNote