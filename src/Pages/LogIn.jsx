import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
const LogIn = () => {


  const { user, LogIn } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[error,setError]= useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await LogIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(error.message)
    }

  }
  return (
    <>
      <div className='w-full h-screen'>

        <img className=' hidden sm:block w-full h-full object-cover  absolute'
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt="/" />



        <div className='w-full h-screen bg-black/60 fixed top-0 left-0'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[500px]  mx-auto  bg-black/80 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold '> Sign In</h1>
              {error?<p className='  text-sm p-2 rounded my-3 bg-red-600'>{error}</p>:null}
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input
                onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-500 rounded' type="email" placeholder='Enter Email ' autoComplete='email' />
                <input  onChange={(e)=>setPassword(e.target.value)} 
                 className='p-3 my-2 bg-gray-500 rounded' type="password" placeholder=' Enter Password' autoComplete='password' />

                <button className='bg-red-600 py-2 my-6 rounded'>  Submit</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-600'>
                    New to Netflix?
                  </span>{' '}
                  <Link to='/Signup'>Sign Up</Link>
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>


    </>
  )
}

export default LogIn


