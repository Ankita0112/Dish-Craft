import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';

const RecipeSingleCard = ({recipe}) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    // const [loading , setLoading] = useState(false);
    // var Favourite = recipe.Favourite;
    // var [status, setStatus] = useState(recipe.Favourite);
    // const id = recipe._id;
    // const Title = recipe.Title;
    // const Ingredients = recipe.Ingredients;
    // const Instructions = recipe.Instructions;
    // const Image_Name = recipe.Image_Name;

    function Title1(props) {
        if ((props.name).length > 54){
            return (props.name).slice(0,54)+"..."
        }else {
            return props.name
        }
    }
    // function favStatusUpdate(data) {
    //     console.log("data:  ", data)
    //     axios
    //         .put(`http://localhost:3000/recipes/${id}`,data)
    //         .then(() => {
    //         console.log("fav status updated successfully")
    //         })
    //         .catch((error) => {
    //         console.log(error);
    //         })
    // }


    // const addFav = () => {
    //     setStatus(true);
    //     Favourite = true; 

    //     const data = {
    //     Favourite
    //     };
    //     favStatusUpdate(data);
  
    //     const data1 = {
    //         id,
    //         Title,
    //         Ingredients,
    //         Instructions,
    //         Image_Name,
    //         Favourite
    //     };

    //     axios
    //       .post('http://localhost:3000/favourite',data1)
    //       .then(() => {
    //         console.log('Recipe added Successfully to Fav');
    //        })
    //       .catch((error) => {
    //         console.log(error);
    //        })
    //     // navigate(0);
        
    // }

    // const dropFav = () => {
    //     setStatus(false);
    //     Favourite = false; 

    //     const data = {
    //     Favourite
    //     };
    //     console.log(data)
    //     favStatusUpdate(data);
  
    //     axios
    //         .delete(`http://localhost:3000/favourite/${id}`)
    //         .then(() => {
    //             console.log('Recipe Deleted Successfully From Fav')
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }


    return (
        <div key={recipe._id} className=" max-w-sm relative mt-10 h-80 ms-12 bg-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <a href="#">
                <img className="rounded-t-lg object-cover h-48 w-full" src={"/src/components/Food Images/"+recipe.Image_Name+".jpg"} alt="" />
            </a>
            <div className="p-5 ">
                <Link to={`/recipes/details/${recipe._id}`}>  
                    <div 
   
                    className="transition hover:duration-150 hover:text-blue-600 mb-2 text-2xl font-bold tracking-tight text-white dark:text-white"
                    >
                        <Title1 name={recipe.Title}/>

                    </div> 
                </Link>
      
                    {/* <div 
                      className=''
                    >
                        {status ?
                        <FavoriteIcon
                        onClick={dropFav} 
                        className='absolute bottom-0 right-0 mr-3 mb-3 text-red-600'/>
                        :
                        <FavoriteBorderIcon
                        onClick={addFav}
                        className='absolute text-white bottom-0 hover:text-red-600 right-0 mr-3 mb-3'
                        />
                        }
                  
                    </div> */}
                        

                
    
            </div>
        </div>
    )
}

export default RecipeSingleCard