import { Component } from 'react';
import Folder from '../Folder/Folder';
import './FolderList.css'

class FolderList extends Component {
    render(){
        return (
            <ul className="folderList">
                <Folder folderData={this.props.folderData} />
            </ul>
            
        )
    }
}

export default FolderList