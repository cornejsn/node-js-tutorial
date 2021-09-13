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
  if (validPassword && validUsername && validEmail) {
    RegisterUser(req.body.username, req.body.password, req.body.email) ? res.sendStatus(200) : res.status(500).send('Error: User already exists.') ;
    // res.send(req.body);
  }
  res.sendStatus(400);
})

// Authentication endpoint
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