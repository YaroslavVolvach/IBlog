const router = require('express').Router()
const userRouter = require('./userRouter')
const homeRouter = require('./homeRouter')
const dashBoardRouter = require('./dashBoardRouter')
const commentRouter = require('./commentRouter')
const postRouter = require('./postRouter')


router.use('/', homeRouter)
router.use('/users', userRouter)
router.use('/dashboard', dashBoardRouter)
router.use('/comments', commentRouter)
router.use('/posts', postRouter)


module.exports = router