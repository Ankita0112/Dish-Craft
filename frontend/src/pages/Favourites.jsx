import Header from '../components/Header'
import { useSelector } from 'react-redux';
import React, {useEffect,useState} from 'react';
import Spinner from '../components/Spinner';
import FavCard from '../components/home/FavCard';
import { useNavigate } from 'react-router-dom';



export default function Favourites() {
  const { currentUser, loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  if (currentUser == null){
    return (
      <div>
        <Header/>
        <div className='justify-center flex flex-col gap-4 h-dvh'>
          <h1 className='text-3xl mx-auto'>Sign in to add recipes to your favourites.</h1>
          <div className='mx-auto mb-28'>
            <button onClick={() =>{navigate('/sign-in')}} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Sign-in
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>


        </div>
      </div>
    )
  }
  if (currentUser.favourites == null || (currentUser.favourites).length == 0){
    return (
      <div>
        <Header/>
          <div className='justify-center flex flex-col gap-4 h-dvh'>
            <h1 className='text-3xl mx-auto'>Like recipes to see them here.</h1>
            <div className='mx-auto mb-28'>
              <button onClick={() =>{navigate('/')}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Explore
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </div>
          </div>
      </div>
    )
  }



  return (
    <div>
      <Header/>

        {loading ? (
          <div className='flex justify-center h-dvh pt-52'>
            <Spinner />
          </div>
            
        ) : (
   
            <FavCard recipes={currentUser.favourites}/>
        )}
 
  </div>
  )
}
