import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'
import { getSingleRoom, updateRoom, deleteRoom } from '../../../controllers/roomController'
import onError from '../../../middlewares/errors'
const handler = nc({ onError })

dbConnect();
handler.get(getSingleRoom)
handler.post(updateRoom)
handler.post(deleteRoom)


export default handler