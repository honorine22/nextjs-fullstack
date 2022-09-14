import React from 'react'
const date = new Date();
const Footer = () => {
    
    return (
        // bottom-0  fixed
        <div className="border-t-2 border-gray-400 absolute bottom-0 w-full mt-2 mx-auto">
            <div className="flex flex-col items-center">
                <div className="sm:w-2/3 text-center py-2">
                    <p className="text-sm text-blue-700 font-bold">
                        © Book IT - 2019-{date.getFullYear()}, All rights Reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer