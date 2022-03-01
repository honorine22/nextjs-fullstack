import React from 'react'
const RoomFeatures = ({ room }) => {
    const classes = 'dark:text-white font-light';
    const notAllowed = 'fa pr-8 fa-times text-red-600'
    const allowed = 'fa pr-8 fa-check text-green-600'
    return (
        <div className='flex flex-col'>
            <h2 className='pb-4 font-bold text-2xl dark:text-white'>Features:</h2>
            <div className="flex flex-row">
                <i className="fa fa-cog pr-12 fa-fw fa-users" aria-hidden="true">
                </i>
                <p className={classes}>{room.guestCapacity} Guest(s)</p>
            </div>

            <div className="flex flex-row">
                <i className="fa fa-cog pr-12 fa-fw fa-bed" aria-hidden="true">
                </i>
                <p className={classes}>{room.numOfBeds} Beds</p>
            </div>

            <div className="flex flex-row">
                <i className={room.breakfast ? allowed : notAllowed}>
                </i>
                <p className={classes}>Breakfast</p>
            </div>

            <div className="flex flex-row">
                <i className={room.internet ? allowed : notAllowed}>
                </i>
                <p className={classes}>Internet</p>
            </div>
            <div className="flex flex-row">
                <i className='fa pr-12 fa-cog fa-fw fa-cutlery'>
                </i>
                <p className={classes}>Kitchen</p>
            </div>
            <div className="flex flex-row">
                <i className={room.airConditioned ? allowed : notAllowed}>
                </i>
                <p className={classes}>Air Conditioned</p>
            </div>
            <div className="flex flex-row">
                <i className={room.petsAllowed ? allowed : notAllowed}>
                </i>
                <p className={classes}>Pets Allowed</p>
            </div>
            <div className="flex flex-row">
                <i className={room.roomCleaning ? allowed : notAllowed}>
                </i>
                <p className={classes}>Room Cleaning</p>
            </div>
            <div className='flex flex-col'>
                <h2 className='font-bold dark:text-white'>Reviews</h2>
                <div className="flex">
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

export default RoomFeatures