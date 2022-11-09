const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const connection = require('../db/index.js');
// const db = require('../db/model.js');

connection.select()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })

console.log(path.resolve(__dirname, '../client/src/dist'))

app.use(express.static(path.resolve(__dirname, '../client/src/dist')))

app.listen((port), () => {
  console.log('server listening on port: ', port);
})