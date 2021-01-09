import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

 class NotePage extends Component {
    static contextType = NotefulContext

    render(){
        const noteItem = this.context.selectedNotes.find(p => {
            return p.id === parseInt(this.props.match.params.noteID)
        })

        return(
            <div className="note-items">
                <h2>{noteItem.note_name}</h2>
                <p>{noteItem.content}</p>
                <Link to='/'>
                    <button>Go Back</button>
                </Link>
            </div>
        )

    }
}

export default NotePage