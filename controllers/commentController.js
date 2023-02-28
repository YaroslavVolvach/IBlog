const {User, Post, Comment} = require('../models');

function getComments(request, response){
    Comment.findAll()
    .then((data) => response.json(data))
    .catch((error) => {response.status(500).json(error);});
}

function createComment(request, response) {
    if (request.session) {
        const body = request.body
        Comment.create({
            comment_text: body.comment_text, 
            post_id: body.post_id, 
            user_id: request.session.user_id
        })   
        .then(data => response.json(data))
        //.catch(error => {response.status(400).json(error)});
    }
}


module.exports = {getComments, createComment};