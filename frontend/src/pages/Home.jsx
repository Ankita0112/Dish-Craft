import React, {useEffect,useState} from 'react';
import axios from 'axios';
import RecipesCard from '../components/home/RecipesCard';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import data from '../assets/DishCraft.recipes';
// import { Link} from "react-router-dom";


const Home = () => {
  const [loading, setLoading] = useState(false);
  var n = data.length
  let i;
  for(i = 0;i<n;i++){
    if ((data[i].id) == 32){
        console.log("hi");
        console.log(data[i]);
        break
        // recipe = currentUser.userRecipe[i]
    }

  }
  console.log(data);



  return (
    <div>
        <Header/>

        {loading ? (
          <div className='flex justify-center h-dvh pt-52'>
            <Spinner />
          </div>
            
        ) : (
            <RecipesCard recipes={data}/>
        )}

    </div>
    

  )
}

export default Home;