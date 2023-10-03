import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

const Movie = ({item}) => {

  const [like,setLike]=useState(false);

 
  return (
    <>
      
      <div className=' w-[160px] sm:w-[200px] md:w-[240] lg:w-[280px]  inline-block relative cursor-pointer p-2'>
        <img className='h-auto w-full block '
         src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
      

        <div className='absolute top-0 left-0 h-full w-full hover:bg-black/70 opacity-0 text-white hover:opacity-100'>
          <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center  h-full text-center'>
            {item?.title}</p>
            <p>{like? <FaHeart className='absolute top-4 left-4 text-gray-400'/>:
             <FaRegHeart className='left-4 top-4 text-gray-400 absolute'/>}</p>
        </div>
      </div> 
   
    </>
  )
} 

export default Movie

