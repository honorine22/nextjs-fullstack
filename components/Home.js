import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import Pagination from 'react-js-pagination'
import RoomItem from './room/RoomItem'
import { clearErrors } from '../redux/actions/roomActions'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

const Home = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } =
        useSelector(state => state.allRooms)

    let { page = 1, location } = router.query;
    page = Number(page)

    useEffect(() => {
        toast.error(error)
        dispatch(clearErrors())
    }, [])

    const handlePagination = (pageNumber) => {
        window.location.href = `/?page=${pageNumber}`
    }

    let count = roomsCount;
    if (location) {
        count = filteredRoomsCount
    }

    return (
        <div className='py-2 lg:mx-4'>
            <h2 className='dark:text-white font-bold text-xl'>{location ? `Rooms in ${location}` : 'All Rooms'}</h2>
            <div className='flex flex-row'>
                <Link href='/search'><a className='no-underline'><i className='pr-4 fa fa-arrow-left'></i>
                    Back to Search</a>
                </Link>
            </div>
            <div className='grid mt-4 items-center grid-cols-1 lg:grid-cols-4 gap-x-8'>
                {!rooms ?
                    <div className="bg-white text-center -mr-60 mt-16 text-red-500">No Rooms Yet.</div>
                    :
                    rooms.map(room => (
                        <RoomItem key={room._id} room={room} />
                    ))
                }
            </div>
            {/* {resPerPage < count &&
                <div className='flex my-8 justify-content-center dark:text-white'>
                    <Pagination activePage={page} itemsCountPerPage={resPerPage}
                        totalItemsCount={roomsCount} onChange={handlePagination}
                        nextPageText={'Next'} prevPageText={'Prev'} firstPageText={'First'}
                        lastPageText={'Last'} linkClass='text-white no-underline border-1 border-blue-400 px-4 py-2'
                    />
                </div>
            } */}
        </div>

    )
}

export default Home