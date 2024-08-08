import React from 'react'

function Pagination(props) {
    const{pageNumProp, prevPageProp, nextPageProp} = props
  return (
    <div className='flex justify-center my-4'>
        <div  onClick={prevPageProp} className='border-2 border-r-0 p-2 rounded-l-xl border-blue-500 text-white bg-blue-400 cursor-pointer'>
         Prev
        </div>

        <div className='border-2 border-r-0 p-2 border-blue-500 text-white bg-blue-400 '>
          {pageNumProp}
        </div>

        <div  onClick={nextPageProp} className='border-2 border-r-1 p-2 rounded-r-xl border-blue-500 text-white bg-blue-400 cursor-pointer'>
         Next
        </div>

    </div>
  )
}

export default Pagination