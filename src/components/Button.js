import React from 'react'

const Button = ({ btnName }) => {
  return (
    <button className='p-1 m-2 px-4 bg-gray-200 rounded-md'>{ btnName }</button>
  )
}

export default Button