import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const ShowRecipe = () => {
  const [recipe, setRecipe] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();

  useEffect(()=>{
    setLoading(true);
    axios
      .get(`http://localhost:3000/backend/recipes/${id}`)
      .then((res)=>{
        setRecipe(res.data);
        setLoading(false);
      })
      .catch((error)=>{
        console.log(error);
        setLoading(false);
      })
  }, [])


  return (
    <div className='min-h-screen bg-gray-300'>
      <div className='p-4 relative '>
        <Link to={`/`}>
        <ArrowBackIosNewIcon sx={{ fontSize: 30 }} className='text-black m-3'/>
        </Link>
        {loading ? (
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

export default ShowRecipe