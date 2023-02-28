const router = require('express').Router();
const authentication = require('../config/authentication');
const {getPosts, updatePost, create} = require('../controllers/dashBoardController.js')

router.get('/', authentication, getPosts);

router.get('/edit/:id', authentication, updatePost)

router.get('/create', create)

module.exports = router;