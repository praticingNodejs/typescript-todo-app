import { Router } from 'express'
import { todoController } from '../controllers/todo.controllers'

const todoRouter = Router()

todoRouter.get('/', todoController.get)
todoRouter.get('/:id', todoController.getById)
todoRouter.post('/', todoController.post)

export default todoRouter