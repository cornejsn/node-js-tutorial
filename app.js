import express from 'express'

const app = express()

// First-time user registration
app.post('/register', (req, res) => {
  res.sendStatus(200);
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