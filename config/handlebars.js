const handlebars = require('express-handlebars');
const helpers = require('../handlebarsHelper')

module.exports = handlebars.create({helpers: helpers})