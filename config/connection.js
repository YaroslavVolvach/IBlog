
require('dotenv').config();

const Sequelize = require('sequelize');

module.exports =  new Sequelize('iblog_db', 'root', 'qwertyqwerty', {host: 'localhost', dialect: 'mysql'});