const express = require("express");
const User = require("../mongoose models/User");
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_Secret = "VeerKhatriSignToken"


// Creating a user using: POST method and path is "/api/auth/createuser". Don't require authentication means no login required
router.post("/createuser", [
    body('name', "enter a valid name").isLength({ min: 3 }),
    body('email', "enter a valid email").isEmail(),
    body('password', "password must contain 10 characters").isLength({ min: 10 }),

], async (requestt, responsee) => {
    // returning errors if there are
    const errors = validationResult(requestt);
    if (!errors.isEmpty()) {
        return responsee.status(400).json({ errors: errors.array() });
    }

    // checking whether the user already exits or email is already taken
    try {
        let user = await User.findOne({ "email": requestt.body.email })
        if (user) {
            return responsee.status(400).json({ error: "sorry user with this email already exits" })
        }
        const salt = await bcrypt.genSalt(10);
        let SecurePassword = await bcrypt.hash(requestt.body.password,salt)
        let SecondSecurePassword = await bcrypt.hash(SecurePassword,salt)
        user = await User.create({
            name: requestt.body.name,
            email: requestt.body.email,
            password: SecondSecurePassword
        })
        const data = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data,JWT_Secret)
        responsee.json({authToken})
        // .then(user => responsee.json(user))
        // .catch(err=> {console.log(err);
        // responsee.json({"error":"This email is registered please enter a unique email"})})
    }catch (error) {
        console.error(error.message);
        responsee.status(500).send("some error occured please try after some time")
    }
}) 

module.exports = router