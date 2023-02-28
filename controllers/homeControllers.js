const {Post, User, Comment} = require('../models')

function getPosts(request, response) {
    Post.findAll({
        attributes: ['id', 'title', 'content', 'created_at'],
        include: [{
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {model: User, attributes: ['username']}
            },
            {model: User, attributes: ['username']}
        ]
    })
    .then(data => {
        const posts = data.map(post => post.get({plain: true}));

        response.render('homepage', {posts, loggedIn: request.session.loggedIn});
    })
    .catch(error => {response.status(500).json(error)});
}


function getPost(request, response) {
    Post.findByPk(request.params.id,{ 
            attributes: ['id', 'title', 'content', 'created_at'],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {model: User, attributes: ['username']}
                },
                { model: User, attributes: ['username']}
            ]
        })
        .then(data => {
            if (data === null) {
                response.status(404).json({Error: 'Post does not exist!'}); 
            }else{
                const post = data.get({plain: true});
    
                response.render('single-post', {post, loggedIn: request.session.loggedIn});
            } 
        })
        .catch(error => {response.status(500).json(error);});
}

function login(request, response){
    if (request.session.loggedIn) {
        response.redirect('/');
    }else{
        response.render('login')
    }
}

function signup(request, response){
    if (request.session.loggedIn) {
        response.redirect('/');
    }else{
        response.render('signup')
    }
}


module.exports = { getPosts, getPost, login, signup }

