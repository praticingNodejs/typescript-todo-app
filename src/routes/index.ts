import { Router } from 'express'

import todoRouter from './todo.route'
import commentRouter from './comment.route'

const router = Router()

router.use('/todo', todoRouter)
router.use('/comment', commentRouter)

export default router 