const router = require('express').Router()
const {addUser, getUsers, getUser, login, logout} = require('../controllers/UserControllers')


router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/create', addUser)
router.post('/login', login)
router.post('/logout', logout)


module.exports = router