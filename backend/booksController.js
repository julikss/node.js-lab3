const fs = require('fs');
const books = require('./storage/books.json');
const authors = require('./storage/authors.json');
const bookNames = require('./storage/bookNames.json');
const keywords = require('./storage/keywords.json');

const addBook = (req, res) => {
  try {
    const value = req.body;
    let enteredKeywords = value.keywords.toLowerCase().split(', ');

    let title = bookNames.find(el => el.value == value.title);
    let author = authors.find(el => el.value == value.author);
    let keywordsArray = [];

    for(let el of keywords) {
      enteredKeywords.forEach(element => {
        if(element == el.value) keywordsArray.push(el);
      });
    }

    if(title && author && keywordsArray) {
      let newObject = {
        id: books.length > 0 ? books[books.length - 1].id + 1 : 0,
        title: title,
        author: author,
        keywords: keywordsArray
      };
  
      books.push(newObject);
      fs.writeFileSync('./storage/books.json', JSON.stringify(books), (err) => {
        if (err) throw err;
      });

      res.json('Successful request');
    } else {
      res.json('Data was not found');
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error found' });
  }
}

const deleteBook = () => {
  try {
    res.json('Successful request');
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error found' });
  }
}

const allBooks = (req, res) => {
  try {
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error found' });
  }
}

module.exports = {
  addBook,
  deleteBook,
  allBooks
}