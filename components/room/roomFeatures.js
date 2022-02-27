import React from 'react'

const roomFeatures = () => {
    return (
        <div>
            <h2 className='pt-8 font-bold dark:text-white text-black'>Features:</h2>
            <p className='dark:text-white text-black font-light'>2 Guests</p>
            <p className='dark:text-white text-black font-light'>2 Beds</p>
            <p className='dark:text-white text-black font-light'>Breakfast</p>
            <p className='dark:text-white text-black font-light'>Internet</p>
            <p className='dark:text-white text-black font-light'>Air Conditioned</p>
            <p className='dark:text-white text-black font-light'>Pets Allowed</p>
            <p className='dark:text-white text-black font-light'>Room Cleaning</p>

            <div className='flex flex-col'>
                <h2 className='font-bold dark:text-white text-black'>Reviews</h2>
                <div className="flex items-center mt-2.5">
                    <div className='rating-outer text-blue-300'>
                        <div className="rating-inner"
                            style={{ width: `${(room.ratings / 5) * 100}%` }}>
                        </div>
                    </div>
                </div>
                <p>by John</p>
                <p>Good Quality</p>
            </div>
        </div>
    )
}

export default roomFeatures