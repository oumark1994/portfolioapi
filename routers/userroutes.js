const {register,login} = require('../controllers/UserController');

const route = require('express').Router();
route.post('/signup',register);
route.post('/login',login);

module.exports = route   