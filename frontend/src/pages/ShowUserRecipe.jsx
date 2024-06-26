import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import { useNavigate ,useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from '../redux/user/userSlice';


const ShowUserRecipe = () => {
  const [loading1,setLoading] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, loading, error} = useSelector((state) => state.user);
  var recipe = []
  const {id} = useParams();
  if(currentUser == null){
    navigate('/sign-up')
  }

  let i;
  let num = (currentUser.userRecipe).length
  for(i = 0;i<num;i++){
    if ((currentUser.userRecipe[i].id) == id){
        console.log("hi");
        recipe = currentUser.userRecipe[i]
    }

  }


  return (
    <div className='min-h-screen bg-gray-300'>
      <div className='p-4 relative'>
        <Link to={`/myrecipe`}>
          <ArrowBackIosNewIcon sx={{ fontSize: 30 }} className='text-black m-3'/>
        </Link>
        
        {loading1 ? (
          <Spinner />
        ) : (
          <div className='flex justify-center'>
            <div className='flex flex-col border-2 bg-white border-black rounded-xl w-fit mx-56 my-6 p-4'>
              <h1 className='text-3xl text-center'>{recipe.Title}</h1>
              <div className='my-4'>
                <span className='text-xl mr-4 font-semibold italic'>Ingredients : </span>
                <span className='text-gray-700'>{recipe.Ingredients}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 font-semibold italic'>Instructions : </span>
                <span className='text-gray-700'>{recipe.Instructions}</span>
              </div>
              </div>
          </div>
        )}
      </div>
    </div>
      
  )
}

export default ShowUserRecipe