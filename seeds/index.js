const seedPosts = require('./postSeeds');
const userData = require('./userSeeds');
const seedComments = require('./commentSeeds');
const {User, Post, Comment} = require("../models")

const sequelize = require('../config/connection');

async function seedAll() {
    
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData);

    await seedPosts();

    await seedComments();

    process.exit(0);
};

seedAll();