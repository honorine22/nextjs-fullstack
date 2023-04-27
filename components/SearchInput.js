import React from 'react'

function SearchInput({ label, value, onChange }) {
    return (
        <div className='mb-4'>
            <label htmlFor={label} className='block mb-2 text-sm font-medium text-gray-900'>
                {label}
            </label>
            <input
                type='text'
                placeholder='New York'
                value={value}
                onChange={onChange}
                id={label}
                className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:border-blue-500'
            />
        </div>
    )
}

export default SearchInput