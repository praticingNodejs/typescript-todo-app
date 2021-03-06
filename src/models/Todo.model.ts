import * as mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    done: {
        type: Boolean,
        default: false
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, { timestamps: true })

const Todo = mongoose.model('Todo', TodoSchema)

export default Todo