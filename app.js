import e from 'express'
import express from 'express'
import multer from 'multer'
import alert from 'alert'
import { CheckPassword } from './services.js'
import { CheckUsername } from './services.js'
import { CheckEmail } from './services.js'
import { RegisterUser } from './services.js'
import { VerifyLogin } from './services.js'

const app = express();
var upload = multer();

// for parsing application/json
app.use(express.json()); 

// for parsing application/xwww-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

// First-time user registration
app.get('/register', (req, res) => {
  res.render('home')
})

app.post('/register', (req, res) => {
  const {password, username, email} = req.body;
  //console.log(req.body);
  let validPassword = CheckPassword(password);
  let validUsername = CheckUsername(username);
  let validEmail = CheckEmail(email);

  /* Error handling for user information*/
  if (!(validPassword && validUsername && validEmail)) {
    res.status(400).send('error: inputs do not meet complexity requirements')
  } else {    
    if (RegisterUser(req.body.username, req.body.password, req.body.email)) {
      res.status(200).send('User successfully registered!')
      alert('User successfully registered!')
    } else {
      res.status(400).send('error: user already exists')
      alert('error: user already exists')
    }
  }
})

// Authentication endpoint
app.post('/login', (req, res) => {
  VerifyLogin(req.body.username, req.body.password, req.body.email) ? res.status(200).send() : res.status(400).send('error: login failed')
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