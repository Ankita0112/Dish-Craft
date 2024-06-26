import Header from '../components/Header'
import { useSelector } from 'react-redux';
import React, {useEffect,useState} from 'react';
import UserCard from '../components/home/UserCard';
// import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';


const MyRecipe = () => {
  const { currentUser, loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  
  if (currentUser == null){
    return(
      <div>
      <Header/>
      <div className='justify-center flex flex-col gap-4 h-dvh'>
        <h1 className='text-3xl mx-auto'>Sign in to create your own recipes.</h1>
        <div className='mx-auto mb-28'>
          <button onClick={() =>{navigate('/sign-in')}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Sign-in
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    )
  }
  if (currentUser.userRecipe == null || (currentUser.userRecipe).length == 0){
    return(
      <div>
      <Header/>
      <div className='justify-center flex flex-col gap-4 h-dvh'>
        <h1 className='text-3xl mx-auto'>Create your own recipes</h1>
        <div className='mx-auto mb-28'>
          <button onClick={() =>{navigate('/myrecipe/create')}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Create
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
    <div className='relative'> 
      <Header className=''/>

      <UserCard recipes={currentUser.userRecipe}/>

      <a href='/myrecipe/create'>
        <div className="fixed bottom-0 right-0 mr-10 mb-10 h-20 w-20 inline-flex group">
          <div
              className='absolute rounded-full transition-all duration-1000 opacity-90 -inset-px bg-gradient-to-r from-[#d5dcdf] via-[#6daffa] to-[#555556] blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'>
          </div>
          <AddIcon sx={{ fontSize: 80 }} className='relative inline-flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-600 text-white'/>
        </div>
      </a>

    </div>
    

  )
}



export default MyRecipe