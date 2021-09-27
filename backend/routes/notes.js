const express = require("express")
const router = express.Router()
const fetchuser = require("../middleware/fetchUser");
const Notes = require("../mongoose models/Notes")
const { body, validationResult } = require('express-validator');
const { request } = require("express");



// Get all the notes using: GET "/api/notes/fetchnotes" login required
router.get("/fetchnotes", fetchuser, async (requestt, responsee) => {
    try {

        const notes = await Notes.find({ user: requestt.user.id });
        responsee.json(notes)
    } catch (error) {
        console.error(error.message);
        responsee.status(500).send("internal server error")
    }
})

// Route 2- Appending/Adding notes using: POST "/api/notes/addnotes" login required
router.post("/addnotes", fetchuser, [
    body('title', "Title can't be empty enter at lease one letter").isLength({ min: 1 }),
    body('description', "Description must contain 10 characters or more").isLength({ min: 10 })
], async (requestt, responsee) => {
    try {

        const errors = validationResult(requestt);
        const { title, description, tag } = requestt.body;
        // if there are errors return bad request and the errors
        if (!errors.isEmpty()) {
            return responsee.status(400).json({ errors: errors.array() });
        }
        let UserNote = new Notes({
            title: title,
            description: description,
            tag: tag,
            user: requestt.user.id
        });
        console.log(UserNote.user);
        const saveNote = await UserNote.save()
        responsee.json(saveNote);
    } catch (error) {
        console.error(error.message);
        responsee.status(500).send("internal server error")
    }
})

// Route 3- updatting an existing note using: PUT "/api/notes/updatenote" login required

router.put("/updatenote/:id", fetchuser, [
    body('title', "Title can't be empty enter at lease one letter").isLength({ min: 1 }),
    body('description', "Description must contain 10 characters or more").isLength({ min: 10 })
], async (requestt, responsee) => {
    try {

        const errors = validationResult(requestt);
        const { title, description, tag } = requestt.body;
        if (!errors.isEmpty()) {
            return responsee.status(400).json({ errors: errors.array() });
        }
        // Creating new note object
        const newNote = {}
        // added  all the thing in newNote object
        if (title) {
            newNote.title = title
        }
        if (description) {
            newNote.description = description
        }
        if (tag) {
            newNote.tag = tag
        }
        // find the note to be updated
        let note = await Notes.findById(requestt.params.id);// gave id in api so we can have the id of note 
        if (!note) {
            //if note not present
            return responsee.status(404).send("note not found")
        }

        // checking the user to be the same
        if (note.user.toString() !== requestt.user.id) {
            return responsee.status(401).send("Want to work for me Hacker?")

        }
        // checked note is there or not and user is authorised to do it or not For Stopping hackers
        note = await Notes.findByIdAndUpdate(requestt.params.id, { $set: newNote }, { new: true })
        responsee.json({ note });
    } catch (error) {
        console.error(error.message);
        responsee.status(500).send("internal server error")
    }
})
// Route 4 - deleting an existing note using: DELETE "/api/notes/deletenote" login required

router.delete("/deletenote/:id",fetchuser, async (requestt, responsee) => {
    try{
        // find the note to be deleted
        let note = await Notes.findById(requestt.params.id);// gave id in api so we can have the id of note 
        if (!note) {
            //if note not present
            return responsee.status(404).send("note not found")
        }

        // checking the user to be the same
        if (note.user.toString() !== requestt.user.id) {
            return responsee.status(401).send("Want to work for me Hacker?")

        }
        // checked note is there or not and user is authorised to do it or not For Stopping hackers
        note = await Notes.findByIdAndDelete(requestt.params.id)
        responsee.send("Note deleted successfully")
    }catch (error) {
        console.error(error.message);
        responsee.status(500).send("internal server error")
    }
})
module.exports = router