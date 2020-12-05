import { Component } from 'react';
import NotesList from '../NotesList/NotesList';
import NotefulContext from '../NotefulContext';

class MainFolders extends Component {
    static contextType = NotefulContext

    render(){
        const folderNotes = this.context.notes.filter(note => 
            note.folderId === this.props.match.params.folderID)

        this.context.selectedNotes = folderNotes

        return(
            <div>
                <NotesList />
            </div>
           
        )
    }
}

export default MainFolders;