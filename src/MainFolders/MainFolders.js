import { Component } from 'react';
import NotesList from '../NotesList/NotesList';
import NotefulContext from '../NotefulContext';

class MainFolders extends Component {
    static contextType = NotefulContext

    render(){
        const folderNotes = this.context.notes.filter(note => 
            note.folderId === this.props.match.params.folderID)

        console.log(folderNotes)

        this.context.notes = folderNotes

        return(
            <div>
                <NotesList noteData={folderNotes} />
            </div>
           
        )
    }
}

export default MainFolders;