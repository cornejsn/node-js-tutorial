import e from 'express'
import express from 'express'
import { CheckPassword } from './services.js'
import { CheckUsername } from './services.js'
import { CheckEmail } from './services.js'
import { RegisterUser } from './services.js'

const app = express()

// First-time user registration
app.use(express.json());
app.post('/register', (req, res) => {
  const {password, username, email} = req.body;
  console.log(req.body);
  let validPassword = CheckPassword(password);
  let validUsername = CheckUsername(username);
  let validEmail = CheckEmail(email);

  /* Error handling for user information*/
  if (!(validPassword && validUsername && validEmail)) {
    res.status(400).send('error: inputs do not meet complexity requirements')
  } else {
    RegisterUser(req.body.username, req.body.password, req.body.email) ? res.status(200).send() : res.status(400).send('error: user already exists')
  }
})

// Authentication endpoint
// FIXME: takes in username and password, authenticates password using email in db (return 401 on failure)
app.post('/login', (req, res) => {
  res.sendStatus(200);
})

// Password reset endpoint
app.post('/reset', (req, res) => {
  res.sendStatus(200);
})

export default app;

/* 
  SIGN UP SERVICE CONSIDERATIONS

  Password must meet Complexity requirements - work on this
  Username must be unique, can't be too long, Profanity filter (extra credit)
  Collect an email, associate that email with their username
  Apply a light-weight database (NeDB)
  How can we mitigate a hacker who gains access to our database with hashed passkeys?
*/