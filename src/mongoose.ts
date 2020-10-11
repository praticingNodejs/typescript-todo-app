import * as mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/todo-app', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(_result => {
    console.log('MongoDb is connected')
}).catch(err => {
    console.error(err)
    console.log('MongoDb err connection!')
})

export default mongoose