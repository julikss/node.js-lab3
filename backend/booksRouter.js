const Router = require('express');
const router = new Router();
const controller = require('./booksController');

router.post('/add', controller.addBook);
router.post('/delete:id', controller.addBook);

module.exports = router;