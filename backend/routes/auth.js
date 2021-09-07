const express = require("express");
const User = require("../mongoose models/User");
const router = express.Router()
const { body, validationResult } = require('express-validator');

// Creating a user using: POST method and path is "/api/auth". Doen't require authentication
router.post("/", [
    body('name', "enter a valid name").isLength({ min: 3 }),
    body('email', "enter a valid email").isEmail(),
    body('password', "password must contain 10 characters").isLength({ min: 10 }),

], (requestt, responsee) => {
    const errors = validationResult(requestt);
    if (!errors.isEmpty()) {
        return responsee.status(400).json({ errors: errors.array() });
    }
    console.log(requestt.body);
    User.create({
        name: requestt.body.name,
        email: requestt.body.email,
        password: requestt.body.password
    }).then(user => responsee.json(user)).catch(err=> {console.log(err); responsee.json({"error":"This email is registered please enter a unique email"})})

})

module.exports = router