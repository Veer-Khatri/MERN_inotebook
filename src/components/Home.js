import React from "react"
import AddNote from "./AddNote";

import UserNotes from './UserNotes';
function Home() {


    return (
        <>
           <AddNote/>
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
