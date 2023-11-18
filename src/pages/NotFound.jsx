// Helmet component from react-helmet-async to manage title and meta tags
import { Helmet } from 'react-helmet-async'

import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>MyMortgageBoutique | Not Found</title>
      </Helmet>
      <main className='notfound-styling'>
        <h2 className='notfound-title'>There was a problem</h2>

        <p>We could not find the page you are looking for</p>

        <p>
          Go back to
          <Link className='link-notfound' to='/'>
            Home
          </Link>{' '}
        </p>
      </main>
    </>
  )
}

export default NotFound
