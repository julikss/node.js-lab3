const Router = require('express');
const router = new Router();
const controller = require('./entityController');

router.delete('/delete/:name/:id', controller.deleteAuthor);

module.exports = router;