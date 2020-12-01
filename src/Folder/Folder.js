import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css';

class Folder extends Component {
    render(){
        const folderTitle = this.props.folderData.map((folder) => {
            return (
                <li className="folderItems" key={folder.id}>
                    <NavLink to={`/folder/${folder.id}`}>
                    {folder.name}
                    </NavLink> 
                </li>
            )
        })

        return (
            <div>
                {folderTitle}
                <button>Add Folder</button>
            </div>
            
        )
    }
}

export default Folder