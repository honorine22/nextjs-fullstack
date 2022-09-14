import mongoose from 'mongoose'
const rooms = require('../data/rooms')
const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        return
    }
    mongoose.connect('mongodb+srv://learnnextjs:learnnextjs123@cluster0.xjzqm.mongodb.net/learnnextjs?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    })
}

export default dbConnect