const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

console.log(path.resolve(__dirname, '../client/src/dist'))

app.use(express.static(path.resolve(__dirname, '../client/src/dist')))

app.listen((port), () => {
  console.log('server listening on port: ', port);
})