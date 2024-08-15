const express = require('express');
const { Login, Register , Logout }= require('../controllers/User');
const Router = express.Router();
Router.route('/register').post(Register);
Router.route('/Login').post(Login);
Router.route('/Logout').get(Logout);

module.exports = Router;


// Router.get('/', (req, res) => res.send('Hello World!'));
