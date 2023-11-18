import React from 'react'
import { Link } from 'react-router-dom'

const Error = ({ link }) => {
  return (
    <div className='error-styling'>
      <p className='error-title'>Something went wrong....</p>
      <p>
        Go back to
        <Link className='link-error' to={link}>
          Home
        </Link>{' '}
      </p>
    </div>
  )
}

export default Error
