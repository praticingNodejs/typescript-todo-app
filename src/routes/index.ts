import { Router } from 'express'

import todoRouter from './todo'
import commentRouter from './comment'

const router = Router()

router.use('/todo', todoRouter)
router.use('/comment', commentRouter)

export default router 