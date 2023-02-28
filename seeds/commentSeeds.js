const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1, 
        post_id: 4, 
        comment_text: "Great this is awesome!"},
    
    {
        user_id: 2,
        post_id: 5,
        comment_text: "Wow fantastic!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "How cool!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "How wonderful!"
    },
    {
        user_id: 5,
        post_id: 2,
        comment_text: "Thanks for your input!"
    },
    {
        user_id: 6,
        post_id: 3,
        comment_text: "Do all of these comments have exclamation points?!"
    },
    {
        user_id: 7,
        post_id: 5,
        comment_text: "I ONLY SPEAK IN CAPS!"
    },
    {
        user_id: 8,
        post_id: 4,
        comment_text: "I'm so tired!"
    },
    {
        user_id: 9,
        post_id: 3,
        comment_text: "This is the only comment on this post!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;