const express = require('express')
const { PORT } = require('./constants')
const { connectDB } = require('./db')

const app = express()

connectDB()

app.get('/', (req, res) => {
  res.json({msg: 'Hello world!'})
})

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`)
})
