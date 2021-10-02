import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="parentNoteDiv">
            <h4>Title ---</h4>
            <p className="noteTitle">
                {note.title}
            </p>
            <h4>Description ----</h4>
            <p className="noteDescription">
                {note.description}
            </p>
            <div className="icons">
                <button><i className="fas fa-edit "></i></button>
                <button><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    )
}

export default NoteItem
