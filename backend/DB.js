// DataBase File
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = async () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo successfully")
    })
}

module.exports = connectToMongo;