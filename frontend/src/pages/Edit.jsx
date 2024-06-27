import React, { useState , useEffect} from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Spinner from '../components/Spinner';
import axios from 'axios';
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

const Edit = () => {
  const [loading1 , setLoading] = useState(false);
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
        // console.log("hi");
        recipe = currentUser.userRecipe[i]
    }

  }
  // console.log(recipe.Title);

  const [Title,setTitle] = useState(recipe.Title);
  const [Ingredients, setIngredients] = useState(recipe.Ingredients);
  const [Instructions , setInstructions] = useState(recipe.Instructions);
  const [Image_Name , setImage_Name] = useState(recipe.Image_Name);
  console.log(Title);

  const handleEditRecipe = async (e) => {
    let data = {
        "id":id,
        "Title":Title,
        "Ingredients":Ingredients,
        "Instructions":Instructions,
        "Image_Name":Image_Name
    }
    let i;
    let num = (currentUser.userRecipe).length
    var curr = []
    for(i = 0;i<num;i++){
      if ((currentUser.userRecipe[i].id) == id){
        curr.push(data)
      }else{
        curr.push(currentUser.userRecipe[i])
      }
    }

    // curr.push(recipe)
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
        console.log("Recipe add failed")
        return;
    }
    console.log("Recipe added successfully")
    console.log(data1);
    dispatch(updateUserSuccess(data));
    setLoading(false)
    setUpdateSuccess(true);
    navigate('/myrecipe')
    } catch (error) {
    console.log(error);
    dispatch(updateUserFailure(error));
    }   
    // }

  };



  return (
    <div className='min-h-screen bg-gray-300'>
      <div className='p-4'>
        <Link to={`/myrecipe`}>
        <ArrowBackIosNewIcon sx={{ fontSize: 30 }} className='text-black m-3'/>
        </Link>
        {/* {loading1 ? <Spinner /> : ''} */}
        <div className='flex flex-col border-2 bg-white border-black rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input
              type='text'
              value={Title}
              onChange={(e)=> setTitle(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Ingredients</label>
            <input
              type='text'
              value={Ingredients}
              onChange={(e)=> setIngredients(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Instructions</label>
            <input
              type='text'
              value={Instructions}
              onChange={(e)=> setInstructions(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Image</label>
            <input
              type='text'
              value={Image_Name}
              onChange={(e)=> setImage_Name(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <button className='p-2 bg-sky-300 m-8' 
          onClick={handleEditRecipe}
          >
            Save
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default Edit