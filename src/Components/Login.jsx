import React, { useState } from 'react'
import Header from './Header'
import axios from "axios"
import { END_POINT } from '../utils/constant'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/userSlice'

function Login() {
  const [isLogin ,setislogin] = useState(false)
  const [isLoading ,setisloading] = useState(false)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate()
  const dispatch = useDispatch()

  const loginHandler = () => {
    setislogin(!isLogin);
  }

  const getinputdata = async (e)=>{
    e.preventDefault();
    if(isLogin){
      try {
        const res = await axios.post(
            `${END_POINT}/Login`,
            { email, password },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            }
        );
        
        if (res.data.success) {
            toast.success(res.data.message);
            dispatch(setUser(res.data.user));
            nevigate("/browse");
        } else {
            toast.error(res.data.message);
        }
        
    } catch (error) {
        if (error.response && error.response.data) {
            toast.error(error.response.data.message);
        } else {
            toast.error("An unexpected error occurred. Please try again.");
        }
        console.log(error);
    }

    }else{
    try{
      const res= await  axios.post(`${END_POINT}/register`,{fullName,email,password},{
        headers:{
          'Content-Type':'application/json'
        },withCredentials:true
      })
      console.log(res)
      if(res.data.success){
        toast.success(res.data.message);
      }
      setislogin(true)
    }catch(error){
      toast.error(error.response.data.message);
      console.log(error)
    }}
    setFullName("");
    setEmail("");
    setPassword("");

  }


  return (
    <div>
    <Header />
    <div className='absolute'>
        <img className='w-[100vw] h-[100vh] bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
    </div>
    <form  className='flex flex-col w-4/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
    <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>        <div className='flex flex-col'>
            
    {
                        !isLogin && <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type='text' placeholder='Full Name' className='outline-none p-3 w-80 my-2 rounded-sm bg-gray-800 text-white' />
                    }            
            <input value={email} onChange={(e)=>setEmail(e.target.value)}  type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
            <input value={password} onChange={(e)=>setPassword(e.target.value)}  type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
            <button type='submit' onClick={getinputdata} className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{`${isLoading ? "loading...":(isLogin?"Login":"Signup")}`}</button>           
            <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span  className='ml-1 text-blue-900 font-medium cursor-pointer ' onClick={loginHandler} >{isLogin ? "Signup" : "Login"}</span></p>            </div>
    </form>
</div>
  )
}

export default Login