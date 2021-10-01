import React from "react"
import UserNotes from './UserNotes';
function Home() {


    return (
        <>
            <form action="" className="form">
                <h2>Enter Title of your note</h2>
                <input type="text" placeholder="Enter title" />
                <h2>Enter Description of your note</h2>
                <textarea name="note" id="note" cols="20" rows="8" placeholder="Enter description"></textarea>
                <div className="btncontainer">
                    <button id="addNoteBtn" type="button" className="btn">Add Note</button>

                </div>
            </form>
            <div className="notesPara">
                <h2>Your Notes</h2>
            </div>
            <div id="notesContainer" >
                <UserNotes />
            </div>
        </>
    )
}

export default Home
