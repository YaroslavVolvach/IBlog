const Sequelize = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize(process.env.JAWSDB_URL, {dialect: 'mysql', url: process.env.DATABASE_URL})
