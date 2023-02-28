const {Post, User, Comment} = require('../models');


function getPosts(request, response)  {
    Post.findAll({
        where: {user_id: request.session.user_id},
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
        response.render('dashboard', {posts, loggedIn: true});
    })
    .catch(error => {response.status(500).json(error);});
}

function updatePost(request, response) {
    Post.findByPk(request.params.id,{
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
            if (data === null) {
                response.status(404).json({Error: 'Post does not exist'});
            }else{
                const post = data.get({plain: true});
    
                response.render('edit-post', {post, loggedIn: true})
            }
        })
        .catch(error => {response.status(500).json(error)});
}

function create(request, response){
    response.render('add-post.handlebars', {loggedIn: true})
}

module.exports = {getPosts, updatePost, create}