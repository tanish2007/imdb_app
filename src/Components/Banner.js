import React from 'react'
import { useState,useEffect } from 'react'


function Banner() {
  return (
    <div className='h-[50vh] md:h-[80vh] bg-center flex items-end bg-cover' 
    style={{
      backgroundImage : `URL(https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg)`
    }}>

      <div className='text-xl md:text-3xl bg-red-900 bg-opacity-60 p-4 text-white text-center w-full'>
        <b>AVENGERS</b>
      </div>

    </div>
  )
}

export default Banner