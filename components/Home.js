import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import RoomItem from './room/RoomItem'
import { clearErrors } from '../redux/actions/roomActions'
const Home = () => {
    const dispatch = useDispatch()
    const { rooms, error } = useSelector(state => state.allRooms)
    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }
        toast.success('This is success message')
    }, [dispatch, error])
    return (
        <div className='py-8 lg:mx-4'>
            <h2 className='text-black dark:text-white font-bold text-xl'>Stays in New York</h2>
            <h5 className='text-blue-500 py-4'>
                <a>Back to Search</a>
            </h5>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-y-16 gap-x-8'>
                {rooms && rooms.length === 0 ?
                    <div className="text-red-200">No Rooms.</div>
                    :
                    rooms.map(room => (
                        <RoomItem key={room._id} room={room} />
                    ))
                }
            </div>
        </div>

    )
}

export default Home