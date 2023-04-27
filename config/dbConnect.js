import mongoose from 'mongoose'
const rooms = require('../data/rooms')
require('dotenv').config()
const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        return
    }
    mongoose.connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    })
}

export default dbConnect