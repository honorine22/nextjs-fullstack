const Room = require('../models/room')
const rooms = require('../data/rooms')
import mongoose from 'mongoose';
require('dotenv').config()
mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})

const seedRooms = async () => {
    try {
        await Room.deleteMany();
        console.log('Rooms are deleted');

        await Room.insertMany(rooms)
        console.log('All Rooms are added.');
        process.exit()
    } catch (error) {
        console.log(error.message);
        process.exit()
    }
}

seedRooms()