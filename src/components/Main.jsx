import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Request from '../Request'

const Main = ({item}) => {


  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(Request.requestPopular).then((response) => {
      setMovies(response.data.results)
    })
  }, [])
  
const truncateString = (str,num)=>{
if(str?.length > num){
return str.slice(0,num) + "...";
}else{
return str;
}
}
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className=' absolute h-[550px] w-full  bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover'
           src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        
        <div className='top-[20%] absolute w-full p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-white text-black border-gray-400 px-4 py-2'>Play</button>
            <button className='border text-white border-gray-400 px-4 py-2 ml-4'>Watch later</button>
          </div>
          <p className='text-sm text-gray-400'>Released:{movie?.release_date}</p>
          <p className='text-gray-200  md: max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{truncateString(movie?.overview,150)}</p>
          </div>
      </div>
    </div>
    
  )
}

export default Main
