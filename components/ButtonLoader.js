import React from 'react'

const ButtonLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin" role="status">
        <span className="spinner-border animate-spin inline-block w-5 h-5 border-2 rounded-full text-red-500 dark:text-green-500"></span>
      </div>
    </div>
  )
}

export default ButtonLoader