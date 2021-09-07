// entry point of backend
const express = require('express')
const connectToMongo = require('./DB')
connectToMongo();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello veeru!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})