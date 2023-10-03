import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Navbar = () => {
  const { user, LogOut } = UserAuth();
  const navigate = useNavigate()

  const handleLogout =  async ()=>{
    try {
      await LogOut();
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>

      <Link to='/'>
        <h1 className='text-red-800 text-4xl cursor-pointer font-bold'>NETFLIX</h1>
      </Link>
      {user?.email ?
       (<div>
        <Link to='/Account'>
          <button
          className=' text-white  pr-4'>Account</button>
        </Link>
        
          <button onClick = {handleLogout} 
          className='bg-red-600 px-4 py-2 rounded cursor-pointer'>LogOut</button>
       
      </div>)
       : (<div>
        <Link to='/login'>
          <button className=' text-white  pr-4'>Sign In</button>
        </Link>
        <Link to='/Signup'>
          <button className='bg-red-600 px-4 py-2 rounded cursor-pointer'>Sign Up</button>
        </Link>
      </div>)}
    </div>
  )
}

export default Navbar
