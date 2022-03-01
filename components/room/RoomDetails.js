import React, { useEffect } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import RoomFeatures from './RoomFeatures'
import Head from 'next/head'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { clearErrors } from '../../redux/actions/roomActions'
const RoomDetails = () => {
    const dispatch = useDispatch();
    const { room, error } = useSelector(state => state.roomDetails)
    useEffect(() => {
        toast.error(error)
        dispatch(clearErrors())
    }, [dispatch, error])

    return (
        <>
            <Head>
                <title>{room.name} - BookIT</title>
            </Head>
            <div className='text-gray-800 dark:text-white flex flex-col lg:mx-40'>
                <h1 className='dark:text-white font-bold text-xl'>{room.name}</h1>
                <p className='text-sm dark:text-white'>{room.address}</p>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center mb-2">
                        <div className='rating-outer text-blue-300'>
                            <div className="rating-inner" style={{ width: `${(room.ratings / 5) * 100}%` }}>
                            </div>
                        </div>
                        <div className="text-md pl-4 text-gray-600 dark:text-white">(
                            {room.numOfReviews} Reviews)</div>
                    </div>
                </div>

                <Carousel>
                    {room.images && room.images.map(image => (
                        <Carousel.Item key={image.public_id}>
                            <Image
                                width='1225rem'
                                height='500px'
                                objectPosition='cover'
                                src={image.url} alt={room.name}
                            />
                        </Carousel.Item>
                    ))
                    }
                </Carousel>

                <h2 className='font-bold pt-8 text-2xl pb-4 dark:text-white'>Description</h2>
                <div className='flex flex-col md:flex-row lg:flex-row'>
                    <p className='lg:mr-32 dark:text-white'>
                        {room.description}
                    </p>
                    <div className='bg-white pt-2 shadow-lg lg:mx-0 mx-8 rounded-lg px-8 py-2'>
                        <p className='text-black font-bold'><span>$
                            {room.pricePerNight}</span>/ night</p>
                        <button className="px-24 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg py-2 text-center">
                            Pay
                        </button>
                    </div>
                </div>
                <RoomFeatures key={room} room={room} />
            </div>
        </>
    )
}

export default RoomDetails