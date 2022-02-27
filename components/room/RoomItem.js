import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RoomItem = ({ room }) => {
    return (
        <div className="max-w-sm relative shadow-md bg-white rounded-lg border dark:border-gray-600 border-gray-200 dark:bg-gray-800">
                <Image objectPosition="center"
                    width='400px'
                    height='300px' objectFit="cover" className="rounded-t-lg" src="/image-1.jpg" alt="Image" />
            <div className="p-8">
                <Link href={`/room/${room._id}`} className="mb-3 font-normal">
                    <a className='text-gray-600 dark:text-white'>
                        {room.name}
                    </a>
                </Link>

                <h5 className="mb-2 text-xl font-bold text-black dark:text-white">$
                    {room.pricePerNight} <span className='text-gray-600 dark:text-white'> / night</span>
                </h5>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className='rating-outer text-blue-400'>
                            <div className="rating-inner"
                                style={{ width: `${(room.ratings / 5) * 100}%` }}>
                            </div>
                        </div>
                    </div>
                    <div className="text-md -mt-4 text-gray-600 dark:text-white">(
                        {room.numOfReviews} Reviews)</div>
                </div>
                <button className="px-24 mt-4 absolute bottom-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <Link href={`/room/${room._id}`}>View details</Link>
                </button>
            </div>
        </div>
    )
}

export default RoomItem