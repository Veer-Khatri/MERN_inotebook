import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';



function UserNotes(props) {
    const context = useContext(NoteContext)
    const { notes, GetNotes, EditNote } = context;
    const [note, setnote] = useState({ id:"", Etitle: "", Edescription: "", Etag: "" })
    let history = useHistory();
    
    const onChange = (eventObj) => {
        setnote({ ...note, [eventObj.target.name]: eventObj.target.value })
    }

    const HandelClick = (eventObj) => {
        let updationForm = document.getElementById("updationForm");
        updationForm.style.display = "none"
        EditNote(note.id, note.Etitle, note.Edescription, note.Etag);
        props.showAlert("Note edited successfully",'success')
        eventObj.preventDefault();
 
        

    }
    useEffect(() => {
        if (localStorage.getItem("token") && localStorage.getItem("token") !== undefined) {
            GetNotes();
        }
        else{
            history.push("/login")
        }
        // GetNotes();
        // eslint-disable-next-line
    }, [])

    const updateNoteBox = (CurrentNote) => {
        setnote({id:CurrentNote._id,Etitle:CurrentNote.title, Edescription:CurrentNote.description , Etag:CurrentNote.tag})
        let updationForm = document.getElementById("updationForm");
        if (updationForm.style.display === "none") {
            
            updationForm.style.display = "flex"
        } else {
            
            updationForm.style.display = "none"
        }

    }
    return (
        <>

            <div>
                <form action="POST" id="updationForm" className="updationForm form">
                    <h3>Enter Title of your note</h3>
                    <input type="text" id="Etitle" name="Etitle" placeholder="Enter title" value={note.Etitle} onChange={onChange} />
                    <h3>Enter Description of your note</h3>
                    <textarea name="Edescription" id="Edescription" cols="8" rows="10" value={note.Edescription} placeholder="Enter description" onChange={onChange}></textarea>
                    <h3>Enter Tag of your note</h3>
                    <input type="text" id="Etag" name="Etag" value={note.Etag} placeholder="Enter Tag" onChange={onChange} />
                    <div className="btncontainer">
                        <button id="updateNoteBtn" type="button" onClick={HandelClick} className="btn">Update Note</button>
                        <button id="CancelNoteBtn" type="button" onClick={updateNoteBox} className="btn">Cancel</button>
                    </div>
                </form>


            </div>
            <div className="notesCollection">
                {notes.length === 0 && "No notes to display"}
                {notes.map((note) => { //Map is a collection of elements where each element is stored as a Key, value pair
                    return <NoteItem key={note._id} updateNote={updateNoteBox} note={note} />
                })}
            </div>
        </>
    )
}

export default UserNotes
