require('dotenv').config()

const express = require('express'),
  session = require('express-session'),
  massive = require('massive'),
  ctrl = require('./controller/controller')

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING }

const app = express()
app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 150 }
}))

massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db)
    console.log('database connected')
    app.listen(SERVER_PORT, () => {
      console.log(`server on ${SERVER_PORT}`)
    })
  })