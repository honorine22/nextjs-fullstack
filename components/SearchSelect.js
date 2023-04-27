import React from 'react'

function SearchSelect({ label, value, onChange, options }) {
    return (
        <div className='mb-4'>
            <label htmlFor={label} className='block mb-2 text-sm font-medium text-gray-900'>
                {label}
            </label>
            <select
                id={label}
                value={value}
                onChange={onChange}
                className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SearchSelect