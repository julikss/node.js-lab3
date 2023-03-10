const express = require('express');
const app = express();
const port = 8000;
const entityRouter = require('./entityRouter');

let authors = require('./storage/authors');
let bookNames = require('./storage/bookNames');
let keywords = require('./storage/keywords');

app.set('view engine', 'ejs');

app.get('/authors', (req, res) => {
  res.render('authorEntity', {
    entityArray: authors,
    entityName: 'authors'
  });
})

app.get('/bookNames', (req, res) => {
  res.render('bookNameEntity', {
    entityArray: bookNames,
    entityName: 'bookNames'
  });
})

app.get('/keywords', (req, res) => {
  res.render('keywordEntity', {
    entityArray: keywords,
    entityName: 'keywords'
  });
})

app.use(express.json());
app.use('/entity', entityRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})