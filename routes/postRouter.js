
const router = require('express').Router();
const {getPosts, getPost, createPost, updatePost, deletePost} = require('../controllers/postController')
const authentication = require('../config/authentication') 


router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", authentication, createPost);

router.put("/:id", authentication, updatePost);

router.delete("/:id", authentication, deletePost);


module.exports = router;