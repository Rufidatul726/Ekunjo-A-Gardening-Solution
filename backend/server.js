const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello World' })

// })

app.use('/api/registration', require('./routes/registration'))

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})