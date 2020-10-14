import Todo from '../models/todo.model'
import BaseController from './base.controller'

class TodoController extends BaseController {
    constructor() {
        super(Todo)
    }
}

export const todoController = new TodoController()