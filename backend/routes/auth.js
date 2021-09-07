const express = require("express");
const User = require("../mongoose models/User");
const router = express.Router()

// Creating a user using: POST method and path is "/api/auth". Doen't require authentication
router.post("/", (requestt,responsee)=>{
    console.log(requestt.body);
    const user = User(requestt.body)
    user.save()
    responsee.send(requestt.body)// we can also send requestt.body

})

module.exports = router 