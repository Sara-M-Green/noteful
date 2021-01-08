import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './Folder.css';

class Folder extends Component {
    static contextType = NotefulContext

    render(){
        const folderTitle = this.context.folders.map((folder) => {
            return (
                    <li className="folderItems" key={folder.id}>
                        <NavLink className="Link" to={`/folders/${folder.id}`} key={folder.id}>
                        {folder.folder_name}
                        </NavLink> 
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