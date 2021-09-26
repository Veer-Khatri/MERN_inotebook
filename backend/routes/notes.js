const express = require("express")
const router = express.Router()
const fetchuser = require("../middleware/fetchUser");
const Notes = require("../mongoose models/Notes")
const { body, validationResult } = require('express-validator');



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

// Appending/Adding notes using: POST "/api/notes/appendnotes" login required
router.post("/appendnotes", fetchuser, [
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

module.exports = router