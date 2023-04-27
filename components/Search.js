import { useRouter, Router } from 'next/router'
import React, { useState } from 'react'
import SearchInput from './SearchInput'
import SearchSelect from './SearchSelect'

const Search = ({ }) => {
    const [state, setState] = useState({
        location: '',
        guests: '',
        category: '',
    })
    const router = useRouter()

    const handleSubmit = (event) => {
        event.preventDefault()

        const { location, guests, category } = state
        const query = `/?location=${location}&guests=${guests}&category=${category}`

        router.push(location.trim() ? query : '/')
    }

    const handleLocationChange = (event) => {
        setState({ ...state, location: event.target.value })
    }

    const handleGuestsChange = (event) => {
        setState({ ...state, guests: event.target.value })
    }

    const handleCategoryChange = (event) => {
        setState({ ...state, category: event.target.value })
    }

    return (
        <div className='flex flex-col items-center justify-center text-white'>
            <div className='rounded my-24 w-96 shadow-lg bg-white p-4 sm:p-6 lg:p-8'>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <h1 className='text-center text-xl font-bold text-black'>Search Rooms</h1>
                    <SearchInput label='Location' value={state.location} onChange={handleLocationChange} />
                    <SearchSelect label='No. ofGuests' value={state.guests} onChange={handleGuestsChange} options={['1', '2', '3', '4']} />
                    <SearchSelect label='Category' value={state.category} onChange={handleCategoryChange} options={['Deluxe', 'Super Deluxe', 'Executive']} />
                    <button type='submit' className='bg-blue-500 text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search