import { Component } from 'react';
import FolderList from '../FolderList/FolderList';
import './Sidebar.css';


class Sidebar extends Component {
    render(){
        return(
            <div className="sidebar">
                <ul>
                    <FolderList folderData={this.props.folderData} />
                </ul>
            </div>
        )
    }
}

export default Sidebar;