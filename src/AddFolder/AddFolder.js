import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

class AddFolder extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    static contextType = NotefulContext;

    handleSubmit = e => {
        e.preventDefault()
        const folder = {
            name: e.target['folderNameInput'].value
        }

        fetch('http://localhost:9090/folders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(folder)
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
            return res.json()
        })
        .then(folder => {
            this.context.addFolder(folder)
            this.props.history.push(`/folder/${folder.id}`)
        })
        .catch(error => {
            console.error({error})
        })
    }

    render() {
        return(
            <div className="newFolderForm">
                <h2>New Folder</h2>
                <Link to='/'>
                    <button>Back</button>    
                </Link>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="folderNameInput">
                        Folder Name: 
                    </label>
                    <input type='text' id="folderNameInput" name="folderNameInput" />
                    <input type='submit' value="Add Folder"></input>
                </form>

            </div>
            
        )
    }
}

export default AddFolder;