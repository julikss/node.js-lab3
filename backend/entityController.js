const fs = require('fs');
let authors = require('./storage/authors');

const deleteAuthor = (req, res) => {
  try {
    const { id } = req.params;
    const filtered = authors.filter(el => el.id != id);

    /*fs.writeFileSync('', JSON.stringify(), (err) => {
      if (err) throw err;
    });*/

    res.json(filtered);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error found' });
  }
};

module.exports = {
  deleteAuthor
};