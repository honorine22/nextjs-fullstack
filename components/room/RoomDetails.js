import React, { useEffect } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import Head from 'next/head'
import { clearErrors } from '../../redux/actions/roomActions'
const RoomDetails = () => {
    const dispatch = useDispatch()
    const { room, error } = useSelector(state => state.roomDetails)
    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }
        toast.success('This is success message')
    }, [dispatch, error])
    return (
        <>
            <Head>
                <title>{room.name} - BookIT</title>
            </Head>

            <div className='dark:bg-gray-800 text-gray-800 dark:text-white text-black flex flex-col lg:mx-40'>
                <h1 className='dark:text-white text-black font-bold text-2xl'>{room.name}</h1>
                <p className='py-2 text-black text-sm dark:text-white'>{room.address}</p>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className='rating-outer text-blue-300'>
                            <div className="rating-inner"
                                style={{ width: `${(room.ratings / 5) * 100}%` }}>
                            </div>
                        </div>
                        <div className="text-md pl-4 text-gray-600 dark:text-white">(
                            {room.numOfReviews} Reviews)</div>
                    </div>
                </div>
                <Image
                    width='200px'
                    height='400px' objectFit="cover" className='mx-24' src="/image-1.jpg" alt="Image" />
                <h2 className='font-bold py-4 dark:text-white text-black'>Description</h2>
                <div className='flex justify-between'>
                    <p className='font-light lg:mr-16 dark:text-white text-black'>
                        {room.description}
                    </p>
                    <div className='flex flex-col bg-white shadow-2xl rounded-xl p-4'>
                        <p><span className='font-bold text-black'>$
                            {room.pricePerNight}</span>/ night</p>
                        <button className="px-24 mt-4 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Pay
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomDetails