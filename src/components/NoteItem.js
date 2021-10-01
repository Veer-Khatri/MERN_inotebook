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
        </div>
    )
}

export default NoteItem
