const express = require("express")
const router = express.Router()

router.get("/", (requestt,responsee)=>{
    
    responsee.json([])
})

module.exports = router