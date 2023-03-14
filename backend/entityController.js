const fs = require('fs');
const Author = require('./entities/authorEntity');

const deleteObject = (req, res) => {
  try {
    const { name, id } = req.params;
    const objArray = require(`./storage/${name}.json`);
    const filtered = objArray.filter(el => el.id != id);

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

const addObject = (req, res) => {
  try {
    const { name } = req.params;
    const { value } = req.body;
    const objArray = require(`./storage/${name}.json`);

    const newObject = new Author(objArray[objArray.length - 1].id + 1, value);
    objArray.push(newObject);
    fs.writeFileSync(`./storage/${name}.json`, JSON.stringify(objArray), (err) => {
      if (err) throw err;
    });

    res.json("Successful request");
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error found' });
  }
};

module.exports = {
  deleteObject,
  addObject
};