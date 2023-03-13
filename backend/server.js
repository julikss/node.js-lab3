const express = require('express');
const app = express();
const port = 8000;
let authors = require('./storage/authors');
let bookNames = require('./storage/bookNames');
let keywords = require('./storage/keywords');

app.set('view engine', 'ejs');

app.get('/authors', (req, res) => {
  res.render('authorEntity', {authors: authors});
})

app.get('/bookNames', (req, res) => {
  res.render('bookNameEntity', {bookNames: bookNames});
})

app.get('/keywords', (req, res) => {
  res.render('keywordEntity', {keywords: keywords});
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})