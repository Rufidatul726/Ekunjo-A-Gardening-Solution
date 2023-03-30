const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000

const app = express()

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello World' })

// })

// app.use('/api/registration', require('./routes/registration'))

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

const usersRouter = require('./routes/users')
const registrationRouter = require('./routes/registration')

app.use('/api/users', usersRouter)
app.use('/api/registration', registrationRouter)



app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})