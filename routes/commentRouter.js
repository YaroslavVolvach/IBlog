const {getComments, createComment} = require("../controllers/commentController")
const authentication = require("../config/authentication")
const router = require('express').Router();


router.get("/", getComments);

router.post("/", authentication, createComment);


module.exports = router;