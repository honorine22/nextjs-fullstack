import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RoomItem = ({ room }) => {
    return (
        <div className="relative shadow-lg rounded-lg">
            <Image objectPosition="center"
                width='400px'
                height='300px' objectFit="cover" className="rounded-t-lg" src={room.images[0].url} alt="Image" />
            <div className="p-8">
                <Link href={`/room/${room._id}`} className="mb-3 font-normal">
                    <a className='text-gray-600 no-underline dark:text-white'>
                        {room.name}
                    </a>
                </Link>

                <h5 className="mb-2 text-xl font-bold dark:text-white">$
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
                <div className='flex justify-center'>
                    <button className="justify-self-center mt-4 absolute bottom-0 bg-blue-900 hover:bg-blue-800 rounded-lg text-sm px-24 py-2.5 text-center">
                        <Link href={`/room/${room._id}`}>
                            <a className='text-white no-underline'>View details</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RoomItem