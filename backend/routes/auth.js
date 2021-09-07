const express = require("express")
const router = express.Router()

router.get("/", (requestt,responsee)=>{
    obj = {
        name:'veer',
        number:77
    }
    responsee.json(obj)
})

module.exports = router