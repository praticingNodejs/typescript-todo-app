import { Request, Response } from 'express'

import mongoose from '../mongoose'

export default class BaseController {
    model: mongoose.Model<any, any>
    modelName: string

    constructor(model: mongoose.Model<any, any>) {
        this.model = model
        this.modelName = model.modelName
    }

    get = async (req: Request, res: Response) => {
        try {
            const dbData = await this.model.find().populate('comments')
            return res.send(dbData)
        } catch (error) {
            return res.status(400).send(`Error in GET ${this.modelName}`)
        }
    }

    getById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const dbData = await this.model.find({ _id: id }).populate('comments')
            return res.send(dbData)
        } catch (error) {
            return res.status(400).send(`Error in GET ${this.modelName}`)
        }
    }

    post = async (req: Request, res: Response) => {
        try {
            const data = req.body
            const dbData = await this.model.create(data)
            return res.send(dbData)
        } catch (error) {
            return res.status(400).send(`Error in POST ${this.modelName}`)
        }
    }
}