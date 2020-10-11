import { Router } from 'express'
import { commentController } from '../controllers/comment.controllers'

const commentRouter = Router()

commentRouter.get('/', commentController.get)
commentRouter.get('/:id', commentController.getById)
commentRouter.post('/', commentController.post)

export default commentRouter