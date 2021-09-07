// entry point of backend
const express = require('express')
const connectToMongo = require('./DB')
connectToMongo();
const app = express()
const port = 3000

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
  console.log(`Example app listening at http://localhost:${port}`)
})