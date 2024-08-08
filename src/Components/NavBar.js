import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4 bg-gray-900'>

      <img src="./logo.png" className='w-[50px] h-[50px]'/>

      <Link to={'/'} className='text-blue-800'>Movies</Link>
      <Link to={'/watchlist'} className='text-blue-800'>WatchList</Link>

    </div>
  )
}

export default NavBar