import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Folder.css';

class Folder extends Component {
    render(){
        const folderTitle = this.props.folderData.map((folder) => {
            return (
                <li className="folderItems" key={folder.id}>
                    <Link to={`/folder/${folder.id}`}>
                    {folder.name}
                    </Link> 
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