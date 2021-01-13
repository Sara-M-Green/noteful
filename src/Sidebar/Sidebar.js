import { Component } from 'react';
import FolderList from '../FolderList/FolderList';
import './Sidebar.css';


class Sidebar extends Component {
    render(){
        return(
            <div className="sidebar">
                <h2>Folders</h2>
                <FolderList />
            </div>
        )
    }
}

export default Sidebar;