import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
} from '../../redux/user/userSlice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavSingleCard = ({recipe}) => {
    const navigate = useNavigate();
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const { currentUser, loading, error} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    var idList = []
    if (currentUser){
        if(currentUser.favourites === null){
            var curr = []
        }else{
            var curr = []
            let i;
            let num = (currentUser.favourites).length
            for(i = 0;i<num;i++){
                curr.push(currentUser.favourites[i])
                idList.push((currentUser.favourites[i])._id)
            }
        }   
    }
    // const [status, setStatus] = useState(idList.includes(recipe._id));
    const [status, setStatus] = useState(true);



    const handleSetFav = async (e) => {
        setStatus(true)
        if(currentUser == null){
            navigate('/sign-up')
        }else{
            curr.push(recipe)
            var data1 = {"favourites": curr}
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
            setUpdateSuccess(true);
            } catch (error) {
            console.log(error);
            dispatch(updateUserFailure(error));
            }   
        }

      };

    const handleRemoveFav = async(e) => {
        setStatus(false)
        e.preventDefault();
        var value = recipe._id
        curr = curr.filter(function(item) {
            if( item._id !== value){
              return item
            }
            
        })
  
        var data2 = {"favourites": curr} 
        try {
            dispatch(updateUserStart());
            const res = await fetch(`/backend/user/update/${currentUser._id}`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data2),
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(updateUserFailure(data));
                console.log("Recipe remove failed")
                navigate('/sign-up')
                return;
            }
            console.log("Recipe removed successfully")
            console.log(data2);
            dispatch(updateUserSuccess(data));
            setUpdateSuccess(true);
            // navigate(0)
        } catch (error) {
            console.log(error);
            dispatch(updateUserFailure(error));
        }
    }


    function Title1(props) {
        if ((props.name).length > 54){
            return (props.name).slice(0,54)+"..."
        }else {
            return props.name
        }
    }


    return (
        <div key={recipe._id} className=" max-w-sm relative mt-10 h-80 ms-12 bg-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <a href="#">
                <img className="rounded-t-lg object-cover h-48 w-full" src={"/src/assets/Food_Images/"+recipe.Image_Name+".jpg"} alt="" />
            </a>
            <div className="p-5 ">
                <Link to={`/fav/details/${recipe.id}`}>  
                    <div 
   
                    className="transition hover:duration-150 hover:text-blue-600 mb-2 text-2xl font-bold tracking-tight text-white dark:text-white"
                    >
                        <Title1 name={recipe.Title}/>

                    </div> 
                </Link>

                    <div 
                      className=''
                    >
                        {status?
                        ( 
                        <FavoriteIcon
                        onClick={handleRemoveFav}
                        className='absolute bottom-0 right-0 mr-3 mb-3 text-red-600'/>
                        ):(
                        <FavoriteBorderIcon
                        onClick={handleSetFav}
                        className='absolute text-white bottom-0 hover:text-red-600 right-0 mr-3 mb-3'
                        />
                        )
                        }
                        
                        {/* // <FavStatus/> */}
                  
                    </div> 
                        

                
    
            </div>
        </div>
    )
}

export default FavSingleCard

