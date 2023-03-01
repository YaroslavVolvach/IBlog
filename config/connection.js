const Sequelize = require('sequelize');
require('dotenv').config();


module.exports = sequelize new Sequelize(process.env.JAWSDB_URL);

