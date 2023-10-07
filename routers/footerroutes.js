const {createFooter, editFooter, deleteFooter, getFooter } = require('../controllers/FooterController');

const route = require('express').Router();
route.get('/',getFooter);
route.post('/',createFooter);
route.put('/:id',editFooter);
route.delete('/:id',deleteFooter)
module.exports = route