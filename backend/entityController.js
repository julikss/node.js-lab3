const fs = require('fs');
let authors = require('./storage/authors.json');
let bookNames = require('./storage/bookNames.json');
let keywords = require('./storage/keywords.json');

const deleteAuthor = (req, res) => {
  try {
    const { name, id } = req.params;
    const filtered = require(`./storage/${name}.json`).filter(el => el.id != id);

    const modified = filtered.map((el, index) => {return {id: index, value: el.value}});
    fs.writeFileSync(`./storage/${name}.json`, JSON.stringify(modified), (err) => {
      if (err) throw err;
    });

    res.json("Successful request");
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error found' });
  }
};

module.exports = {
  deleteAuthor
};