import React, {useState} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
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

// import { useSnackbar } from 'notistack';


const Delete = () => {
  const [loading1 , setLoading] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();
  const { currentUser, loading, error} = useSelector((state) => state.user);
  var curr = []
  const {id} = useParams();
  const navigate = useNavigate();

  if(currentUser == null){
    navigate('/sign-up')
  }
  const handleDeleteRecipe = async (e) => { 
    let i;
    let num = (currentUser.userRecipe).length
    var curr = []
    for(i = 0;i<num;i++){
      if ((currentUser.userRecipe[i].id) != id){
        curr.push(currentUser.userRecipe[i])
      }
    }
    var data1 = {"userRecipe": curr}
    e.preventDefault();
    try {
    dispatch(updateUserStart());
    const res = await fetch(`/backend/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data1),
    });
    const data = await res.json();
    if (data.success === false) {
        dispatch(updateUserFailure(data));
        console.log("Recipe delete failed")
        navigate('/sign-in')
        return;
    }
    console.log("Recipe deleted successfully")
    console.log(data1);
    dispatch(updateUserSuccess(data));
    setUpdateSuccess(true);
    navigate('/myrecipe')
    } catch (error) {
    console.log(error);
    dispatch(updateUserFailure(error));
    }



  }




  return (
    <div className='p-4'>
      <Link to={`/myrecipe`}>
      <ArrowBackIcon sx={{ fontSize: 50 }}/>
      </Link>
      
      {/* <h1 className='text-3xl my-10'>Delete Recipe</h1> */}
      {loading1 ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2nborder-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this recipe?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteRecipe}>
          Yes, Delete it
        </button>
      </div>


    </div>
  )
}

export default Delete