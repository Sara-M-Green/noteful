import { Component } from 'react';
import { Link } from 'react-router-dom';
import Folder from '../Folder/Folder';
import './FolderList.css'

class FolderList extends Component {
    render(){
        return (
            <>
                <ul className="folderList">
                    <Folder />
                </ul>
                <Link to='/folders'>
                    <button>Add Folder</button>
                </Link>
            </>
        )
    }
}

export default FolderList