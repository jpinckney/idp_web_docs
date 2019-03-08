require('dotenv').config()

const express = require('express'),
  session = require('express-session'),
  massive = require('massive'),
  ctrl = require('./controller/login'),
  ctrl_2 = require('./controller/controller')
  pg = require('pg')
pgSession = require('connect-pg-simple')(session)

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

const pgPool = new pg.Pool({
  connectionString: CONNECTION_STRING
})

const app = express()
app.use(express.json())

app.use(session({
  // store: new pgSession({
  //   pool: pgPool,
  //   pruneSessionInterval: 60 * 60 * 24
  // }),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 1 }
}))

massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db)
    console.log('database connected')
    app.listen(SERVER_PORT, () => {
      console.log(`server on ${SERVER_PORT}`)
    })
  })

// user start
app.post('/api/auth/register', ctrl.register)
app.get('/api/auth/current-user', ctrl.checkForUser)
// user session
app.post('/api/auth/login', ctrl.login)
app.post('/api/auth/logout', ctrl.logout)
// user end

app.get('/api/docs/:category', ctrl_2.selectCategory)
// app.post('/user_note', ctrl2.user_note)
