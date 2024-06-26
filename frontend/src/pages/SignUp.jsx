import React from 'react'
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import OAuth from '../components/OAuth';
import axios from 'axios';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('backend/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className='bg-black min-h-screen'>
      <Link to={`/`}>
        <ArrowBackIosNewIcon sx={{ fontSize: 30 }} className='text-white m-3 ml-4 mt-6'/>
      </Link>

      <div className='p-5 max-w-96 mx-auto'>       
        <div className="flex items-center mt-8 mb-12 space-x-1 rtl:space-x-reverse">
          <img src="https://www.svgrepo.com/show/86031/cutlery.svg" className="h-24" alt="Flowbite Logo" />
          <span className="text-5xl text-white font-semibold whitespace-nowrap dark:text-white">Dish Craft</span>
        </div>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Username'
          id='username'
          className='bg-black border-2 border-white text-white p-3 rounded-lg'
          onChange={handleChange}
        />
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
          {loading ? 'Loading...' : 'Sign Up'}
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
