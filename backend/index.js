// entry point of backend
let cors = require("cors")
const express = require('express')
const connectToMongo = require('./DB')
connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())// this is a middleware if we want to use requestt.body 


// available routes
app.use("/api/auth", require("./routes/auth") )
app.use("/api/notes", require("./routes/notes") )


// we will not do the commented code because it is not easy to handle
// app.get('/api/login', (req, res) => {
//   res.send('Hello login!')
// })
// app.get('/api/signup', (req, res) => {
//   res.send('Hello signup!')
// })

app.listen(port, () => {
  console.log(`Inotebook app listening at http://localhost:${port}`)
})