const express = require("express")
const router = express.Router()

// Get all the notes using: GET ""
router.get("/fetchnotes", (requestt,responsee)=>{
    responsee.json([])
})

module.exports = router