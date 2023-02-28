require('dotenv').config();

const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const session = require('./config/session.js')
const rootRouter = require('./routes/rootRouter');
const handlebars = require('./config/handlebars')

const app = express()

const PORT = process.env.PORT || 3001;

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/static")));
app.use(session)

app.use(rootRouter)

sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
  });