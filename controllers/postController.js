const router = require('express').Router();
const {User, Post, Comment} = require('../models');


function getPosts(request, response) {
    Post.findAll({
            attributes: ["id", "content", "title", "created_at"],
            order: [["created_at", "DESC"]],
            include: [{
                model: User,
                attributes: ["username"]},
                {
                    model: Comment,
                    attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                    include: {model: User, attributes: ["username"],},
                },
            ],
        })
        .then((data) => response.json(data))
        .catch((error) => {response.status(500).json(error)});
}


function getPost(request, response) {
    Post.findByPk(request.params.id, {
            attributes: ["id", "content", "title", "created_at"],
            include: [{
                model: User, 
                attributes: ["username"]},
            {
                model: Comment,
                attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                include: {model: User, attributes: ["username"]},
                },
            ],
        })
        .then((data) => {
            if (data === null) {
                response.status(404).json({Error: "Post does not exist!"});
            }else{
                const post = data.get({plain: true});

                response.render("single-post", {post, loggedIn: request.session.loggedIn})
            }
        })
        .catch((error) => {response.status(500).json(error)});
}

function createPost(request, response) {
    const body = request.body;
    Post.create({
            title: body.title,
            content: body.postContent,
            user_id: request.session.user_id
        })
        .then((data) => response.json(data))
        .catch((error) => {response.status(500).json(error)});
}

// Update a post
function updatePost (request, response) {
    const body = request.body
    const status = request.status
    Post.update({
            title: body.title,
            content: body.post_content,
        }, {
            where: {
                id: request.params.id,
            },
        })
        .then((data) => {
            if (data === null) {
                status(404).json({Error: "Post does not exist!"});
                
            }else{
                response.json(data);
            }
        })
        .catch((error) => {status(500).json(error)});
}

function deletePost(request, response) {
    const status = request.status
    Post.destroy({
            where: {
                id: request.params.id,
            },
        })
        .then((data) => {
            if (data === null) {
                status(404).json({Error: "Post does not exist!"});
                
            }else{
                response.json(data);
            }
        })
        .catch((error) => {status(500).json(error)});
}


module.exports = {getPosts, getPost, createPost, updatePost, deletePost};