import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Search = () => {
    const [location, setLocation] = useState('')
    const router = useRouter()

    const submitHandler = (e) => {
        e.preventDefault()

        if (location.trim()) {
            router.push(`/?location=${location}`)
        } else {
            router.push('/')
        }
    }

    return (
        <div className="flex flex-col items-center justify-center text-white">
            <div className="rounded my-24 w-96 shadow-lg bg-white p-4 sm:p-6 lg:p-8">
                <form
                    onSubmit={submitHandler}
                    autoComplete="off"
                >
                    <h1 className="text-center text-xl font-bold text-black">
                        Search Rooms
                    </h1>
                    <div className="mb-6">
                        <label htmlFor='location_field' className="block mb-2 text-sm font-medium text-gray-900">Location</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} id="location_field" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:border-blue-500" />
                    </div>
                    {/* <div className='mb-4'>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">No. of Guests</label>
                        <select id="countries" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Room Type</label>
                        <select id="countries" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                    </div> */}
                    <div className='mt-8'>
                        <button className="px-36 py-2 rounded bg-gray-900" type="submit">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search