const Room = require('../models/room')
const rooms = require('../data/rooms')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/roomDB', {
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