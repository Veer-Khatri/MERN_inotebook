import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = () => {

    const context = useContext(NoteContext)
    const { AddNote } = context;
    const [note, setnote] = useState({ title: "", descritpion: "", tag: "" })
    const onChange = (eventObj) => {
        setnote({ ...note, [eventObj.target.name]: eventObj.target.value })
    }
    const HandelClick = (eventObj) => {
        eventObj.preventDefault();
        AddNote(note.title, note.descritpion, note.tag)
    }
    return (
        <form action="POST" className="form">
            <h2>Enter Title of your note</h2>
            <input type="text" id="title" name="title" placeholder="Enter title" onChange={onChange} />
            <h2>Enter Description of your note</h2>
            <textarea name="description" id="description" cols="20" rows="8" placeholder="Enter description" onChange={onChange}></textarea>
            <h2>Enter Tag of your note</h2>
            <input type="text" id="tag" name="tag" placeholder="Enter Tag" onChange={onChange} />
            <div className="btncontainer">
                <button id="addNoteBtn" type="button" onClick={HandelClick} className="btn">Add Note</button>

            </div>
        </form>

    )
}

export default AddNote
