import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddingNote = (props) => {
    setTimeout(() => {
        if (document.getElementById("addNoteBtn").disabled === true) {
            document.getElementById("tooltip").style.display = "block"
        }
        else {
            document.getElementById("tooltip").style.display = "none"

        }

    }, 100);

    const context = useContext(NoteContext)
    const { AddNote } = context;
    const [note, setnote] = useState({ title: "", description: "", tag: "" })
    const onChange = (eventObj) => {
        setnote({ ...note, [eventObj.target.name]: eventObj.target.value })
    }
    const HandelClick = (eventObj) => {
        eventObj.preventDefault();
        AddNote(note.title, note.description, note.tag)
        document.getElementById("title").value = ""
        document.getElementById("description").value = ""
        document.getElementById("tag").value = ""
        setnote({ title: "", description: "", tag: "" })
        props.showAlert("Note added successfully","success")
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
                <div id="tooltip">Title and Description contain atleast 5 characters</div>
                <button disabled={note.title.length < 5 || note.description.length < 5} id="addNoteBtn" type="button" onClick={HandelClick} className="btn">Add Note</button>

            </div>
        </form>

    )
}

export default AddingNote
