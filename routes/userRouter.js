const router = require('express').Router()
const {addUser, login, logout} = require('../controllers/userControllers')


router.post('/create', addUser)
router.post('/login', login)
router.post('/logout', logout)


module.exports = router
