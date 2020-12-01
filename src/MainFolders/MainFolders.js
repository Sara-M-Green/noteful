import { Component } from 'react'
import NotesList from '../NotesList/NotesList'

class MainFolders extends Component {
    render(){
        const folderNotes = this.props.FolderNotes.filter(note => 
            note.folderId === this.props.match.params.folderID)

        console.log(folderNotes)

        return(
            <div>
                <NotesList noteData={folderNotes} />
            </div>
           
        )
    }
}

export default MainFolders;