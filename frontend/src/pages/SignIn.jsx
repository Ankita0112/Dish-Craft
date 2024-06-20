import React from 'react'
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios';
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

      {/* <img src="https://www.svgrepo.com/show/86031/cutlery.svg" className="h-16 pt-6 pl-4" alt="Flowbite Logo" /> */}
      <div className='p-5 max-w-96 mx-auto'>
      <h1 className='text-3xl text-white text-center font-semibold mx-auto mt-28 mb-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {/* <input
          type='text'
          placeholder='Username'
          id='username'
          className='bg-black border-2 border-white text-white p-3 rounded-lg'
          onChange={handleChange}
        /> */}
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
        <p className='text-gray-300'>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
    </div>
    </div>
  )
}
