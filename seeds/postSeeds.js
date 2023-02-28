const { Post } = require('../models');

const postData = [
    {
        title: "Tech Blog Finally Released!",
        post_content: "This tech blog is for all you techies out there!",
        user_id: 3
    },
    {
        title: "Programmers Are Fawning Over New Language!",
        post_content: "It's like Egyptian Heiroglyphics!",
        user_id: 5
    },
    {
        title: "Florida Man Goes Crazy After Failing To Discover Coding Errors!",
        post_content: "What a unique title!",
        user_id: 4
    },
    {
        title: "Breaking News: Having More Monitors Does Make You Cooler!",
        post_content: "The more the better!",
        user_id: 2
    },
    {
        title: "Why the USA is the greatest country of the world!",
        post_content: "Becouse!",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;