import React from "react"
import AddNote from "./AddingNote";

import UserNotes from './UserNotes';
function Home(props) {


    return (
        <>
           <AddNote showAlert={props.showAlert} />
            <div className="notesPara">
                <h2>Your Notes</h2>
            </div>
            <div id="notesContainer" >
                <UserNotes showAlert={props.showAlert}/>
            </div>
        </>
    )
}

export default Home
