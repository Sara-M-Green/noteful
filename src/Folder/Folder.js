import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './Folder.css';
import config from '../config'

class Folder extends Component {
    static contextType = NotefulContext

    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    static defaultProps = {
        handleDeleteFolder: () => {},
    }

    handleDeleteFolder = (e, folderId) => {
        e.preventDefault()

        fetch(`${config.API_ENDPOINT}/folders/${folderId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
            this.context.deleteFolder(folderId)
        })
        .catch(error => {
            console.error({error})
        })
    }

    render(){
        const folderTitle = this.context.folders.map((folder) => {
            return (
                    <li className="folderItems" key={folder.id}>
                        <NavLink className="NavLink " to={`/folders/${folder.id}`} key={folder.id}>
                            <p>{folder.folder_name}</p>
                        </NavLink>                     

                        <button className="delete_btn" onClick={(e) => this.handleDeleteFolder(e, folder.id)}>Delete Folder</button>

                        
                    </li>
            )
        })

        return (
            <div>
                {folderTitle}
            </div>
            
        )
    }
}

export default Folder