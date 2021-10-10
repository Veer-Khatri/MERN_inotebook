import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext)
    const { DeleteNote } = context;
    const { note , updateNote } = props;
    
    return (
        <>
        <div className="parentNoteDiv">
            <h4>Title ---</h4>
            <p className="noteTitle">
                {note.title}
            </p>
            <h4>Description ----</h4>
            <p className="noteDescription">
                {note.description}
            </p>
            <h4>Tag ----</h4>
            <p className="noteDescription">
                {note.tag}
            </p>
            <div className="icons">
                <button><i className="fas fa-edit " onClick={()=>{updateNote(note)}}></i></button>
                <button><i className="fas fa-trash-alt" onClick={()=>{DeleteNote(note._id)}}></i></button>
            </div>
        </div>
        </>
    )
}

export default NoteItem
