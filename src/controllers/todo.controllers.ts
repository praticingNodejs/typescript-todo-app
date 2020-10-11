import Todo from '../models/Todo.model'
import BaseController from './base.controllers'

class TodoController extends BaseController {
    constructor() {
        super(Todo)
    }
}

export const todoController = new TodoController()