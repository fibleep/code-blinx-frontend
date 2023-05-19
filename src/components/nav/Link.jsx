import React from 'react'

const Link = ({name}) => {
  return (
    <a href='#' className='text-white hover:text-gray-400 mx-2'>
        {name}
    </a>
  )
}

export default Link