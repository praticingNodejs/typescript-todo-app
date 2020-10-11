import { Request, Response } from 'express'
import CommentInterface from '../interfaces/comment.interface'

import Comment from '../models/Comment.model'
import Todo from '../models/Todo.model'
import BaseController from './base.controllers'

class CommentController extends BaseController {
    constructor() {
        super(Comment)
    }

    post = async (req: Request, res: Response) => {
        try {
            const data = req.body
            //@ts-ignore
            if (!data.todoId) {
                return res.status(400).send(`Error todo id is required!`)
            }

            const comment: CommentInterface = data
            const commentData: CommentInterface = {
                title: comment.title,
                description: comment.description
            }

            const dbData = await Comment.create(commentData)

            await Todo.update({
                _id: data.todoId
            }, {
                $push: {
                    comments: dbData._id
                }
            })

            return res.send(dbData)
        } catch (error) {
            return res.status(400).send(`Error in POST ${this.modelName}`)
        }
    }
}

export const commentController = new CommentController() 