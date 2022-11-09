const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const db = require('../db/index.js');
const bodyParser = require('body-parser');

app.use(express.static(path.resolve(__dirname, '../client/src/dist')))
app.use(bodyParser.json());

app.post('/addUser', (req, res) => {
  console.log(req.body);
  let userName = req.body.signUsername;
  let password = req.body.signPassword;

  db.addUser(userName, password)
    .then((response) => {
      return db.selectAllUsers();
    })
    .then((userData) => {
      res.send(userData)
    })
    .catch((err) => {
      res.send(500);
    })

})

app.post('/addMessage', (req, res) => {
  console.log(req.body);
  let userName = req.body.user;
  let message = req.body.message;

  db.addMessage(userName, message)
    .then((response) => {
      return db.selectAllMessages();
    })
    .then((userData) => {
      console.log('userData', userData)
    })

})

app.post('/verifyUser', (req, res) => {
  let username = req.body.loginUsername;
  let password = req.body.loginPassword;

  db.verifyUser(username, password)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/allMessages', (req, res) => {
  db.selectAllMessages()
    .then((messages) => {
      res.send(messages)
    })
    .catch((err) => {
      cosole.log(err);
    })
})

app.listen((port), () => {
  console.log('server listening on port: ', port);
})