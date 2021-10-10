// LEARNING CONTEXT API 
// STATE FILE

import { useState } from "react";
import NoteContext from "./NoteContext"; // this is from our note context file
const NoteState = (props) => {
    const Host = 'http://localhost:5000'

    const initialNotes = []
    const [notes, setnotes] = useState(initialNotes)


    // Get all Notes
    const GetNotes = async () => {
        //  API CALL
        let url = `${Host}/api/notes/fetchnotes`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZWQ3MmYzNGQ0OTI3YWE4OTk4MGM4In0sImlhdCI6MTYzMjU1NzEwNn0.cqmXQyTMpYrOpu4N8C5PldTZi1haykOdZ51CzWHBREw'
            }

        });
        const json = await response.json()
        setnotes(json)

    }

    // Add note Func
    const AddNote = async (title, description, tag) => {
        //  API CALL
        let url = `${Host}/api/notes/addnotes`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZWQ3MmYzNGQ0OTI3YWE4OTk4MGM4In0sImlhdCI6MTYzMjU1NzEwNn0.cqmXQyTMpYrOpu4N8C5PldTZi1haykOdZ51CzWHBREw'
            },
            body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
        });
        console.log(response);
        // console.log(response[body]);
        const json = await response.json()
        console.log(json);
        // let note = {
        //     "_id": "615018a016235d29561a110asdfaban",
        //     "user": "614ed72f34d4927aa89980c8",
        //     "title": { title },
        //     "description": { description },
        //     "tag": { tag },
        //     "date": "2021-09-26T06:52:16.331Z",
        //     "__v": 0
        // };
        // setnotes(notes.concat(note)) //
        setnotes(notes.concat(json)) // dont use push() because concat returns and array whereas push updates and array
    }


    // Delete note Func
    const DeleteNote = async (id) => {
        //  API CALL
        let url = `${Host}/api/notes/deletenote/${id}`
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZWQ3MmYzNGQ0OTI3YWE4OTk4MGM4In0sImlhdCI6MTYzMjU1NzEwNn0.cqmXQyTMpYrOpu4N8C5PldTZi1haykOdZ51CzWHBREw'
            },

        });
            // const json = await response.json()
            // console.log(json);
        
        console.log("deleting the node : id ", id);
        const newNotes = notes.filter((note) =>{ return note._id !== id})
        setnotes(newNotes)


    }


    // Edit note Func
    const EditNote = async (id ,title,description,tag) => {
        // API CALL
        let url = `${Host}/api/notes/updatenote/${id}`
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZWQ3MmYzNGQ0OTI3YWE4OTk4MGM4In0sImlhdCI6MTYzMjU1NzEwNn0.cqmXQyTMpYrOpu4N8C5PldTZi1haykOdZ51CzWHBREw'
            },
            body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
        });
        const json = response.json()
        console.log(json);
        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in clint 
        for (let i = 0; i < newNotes.length; i++) {
            const element = newNotes[i];
            console.log(element ,element._id);
            console.log("hello ji");
            if (element._id === id) {
                newNotes[i].title = title;
                newNotes[i].description = description;
                newNotes[i].tag = tag;
                break;
            }
        }
        setnotes(newNotes);
    }
    return (
        <NoteContext.Provider value={{ notes, AddNote, EditNote, DeleteNote, GetNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;