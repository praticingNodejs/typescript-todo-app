import Todo from '../models/todo.model'
import BaseController from './base.controllers'

class TodoController extends BaseController {
    constructor() {
        super(Todo)
    }
}

export const todoController = new TodoController()