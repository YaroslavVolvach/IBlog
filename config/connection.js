const Sequelize = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize(process.env.JAWSDB_URL);
