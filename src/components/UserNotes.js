import React,{  useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';

function UserNotes() {
    const context = useContext(NoteContext)
    const { notes, setNotes } = context;

    return (
        <div className="notesCollection">
            {notes.map((note) => {
                return <NoteItem key={note._id} note={note} />
            })}
        </div>
    )
}

export default UserNotes
