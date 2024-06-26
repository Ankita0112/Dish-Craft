import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';


const UserSingleCard = ({recipe}) => {
    const navigate = useNavigate();
  

    function Title1(props) {
        if ((props.name).length > 21){
            return (props.name).slice(0,21)+"..."
        }else {
            return props.name
        }
    }


    return (
        <div key={recipe._id} className=" max-w-sm relative mt-10 h-80 ms-12 bg-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <a href="#">
                <img className="rounded-t-lg object-cover h-48 w-full" src={recipe.Image_Name} alt="" />
            </a>
            <div className="p-5 ">
                <Link to={`/myrecipe/details/${recipe.id}`}>  
                    <div 
   
                    className="transition hover:duration-150 hover:text-blue-600 mb-2 text-2xl font-bold tracking-tight text-white dark:text-white"
                    >
                        <Title1 name={recipe.Title}/>

                    </div> 
                </Link>
                <div className='flex justify-start items-center gap-x-12 mt-4 p-4'>
         
                    <Link to={`/myrecipe/edit/${recipe.id}`}>
                        <AiOutlineEdit className='text-2xl text-gray-500 hover:text-white' />
                    </Link>
                    <Link to={`/myrecipe/delete/${recipe.id}`}>
                        <MdOutlineDelete className='text-2xl text-gray-500 hover:text-white' />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default UserSingleCard