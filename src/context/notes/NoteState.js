// LEARNING CONTEXT API 
// STATE FILE

import { useState } from "react";
import NoteContext from "./NoteContext"; // this is from our note context file
const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "615017adad0a970cedc73b5d1",
            "user": "614ed72f34d4927aa89980c8",
            "title": "my note",
            "description": "hello this is my note",
            "tag": "Sun Sep 26 2021 12:18:13 GMT+0530 (India Standard Time)",
            "__v": 0,
            "date": "2021-10-01T03:26:27.165Z"
        },
        {
            "_id": "615017adad0a970cedc73b5d",
            "user": "614ed72f34d4927aa89980c8",
            "title": "my note",
            "description": "hello this is my note",
            "tag": "Sun Sep 26 2021 12:18:13 GMT+0530 (India Standard Time)",
            "__v": 0,
            "date": "2021-10-01T03:26:27.165Z"
        },
        {
            "_id": "6150185e7099be79e8d54ae7",
            "user": "614ed72f34d4927aa89980c8",
            "title": "my note",
            "description": "hello this is my note",
            "tag": "personal",
            "date": "2021-09-26T06:51:10.641Z",
            "__v": 0
        },
        {
            "_id": "615018a016235d29561a110b",
            "user": "614ed72f34d4927aa89980c8",
            "title": "my note",
            "description": "hello this is my note",
            "tag": "personal",
            "date": "2021-09-26T06:52:16.331Z",
            "__v": 0
        }
    ]
    const [notes, setnotes] = useState(initialNotes)
    // Add note Func
    const AddNote = (title, description, tag,) => {
        //  TODO:API CALL
        let note = {
            "_id": "615018a016235d29561a110asdfaba",
            "user": "614ed72f34d4927aa89980c8",
            "title": {title},
            "description": {description},
            "tag": {tag},
            "date": "2021-09-26T06:52:16.331Z",
            "__v": 0
        };
        setnotes(notes.concat(note)) // not push because Concat returns and array whereas push updates and array
    }
    
    
    // Delete note Func
    const DeleteNote = (id) => {
        //  TODO:API CALL
        console.log("deleting the node : id ", id );
        const newNotes = notes.filter((note)=>{ return note._id!== id})
        setnotes(newNotes)
        
     }


    // Edit note Func
    const EditNote = (id, title,description,tag) => { }

    return (
        <NoteContext.Provider value={{ notes, AddNote, EditNote, DeleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;