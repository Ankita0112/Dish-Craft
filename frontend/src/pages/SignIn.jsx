import React from 'react'
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/backend/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data)
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className='bg-black min-h-screen'>
      <Link to={`/`}>
        <ArrowBackIosNewIcon sx={{ fontSize: 30 }} className='text-white m-3 ml-4 mt-6'/>
      </Link>

      <div className='p-5 max-w-96 mx-auto'>
      <div onClick={()=>{navigate('/')}} className="flex items-center mt-8 mb-12 space-x-1 rtl:space-x-reverse">
          <img src="https://www.svgrepo.com/show/86031/cutlery.svg" className="h-24" alt="Flowbite Logo" />
          <span className="text-5xl text-white font-semibold whitespace-nowrap dark:text-white">Dish Craft</span>
        </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-black border-2 border-white text-white p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-black border-2 border-white p-3 text-white rounded-lg'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-blue-800 text-white p-3 rounded-lg uppercase hover:opacity-60 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <hr className="h-px bg-gray-600  dark:bg-gray-600"></hr>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-gray-300'>Don't have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-500'>Sign up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
    </div>
    </div>
  )
}
