const router = require("express").Router()
const { getPosts, getPost, login, signup } = require("../controllers/homeControllers")

router.get('/', getPosts)

router.get('/post/:id', getPost)

router.get('/login', login);

router.get('/signup', signup);

module.exports = router