const {createContact, editContact, deleteContact, getContact } = require('../controllers/ContactController');

const route = require('express').Router();
route.get('/',getContact);
route.post('/',createContact);
route.put('/:id',editContact);
route.delete('/:id',deleteContact)
module.exports = route