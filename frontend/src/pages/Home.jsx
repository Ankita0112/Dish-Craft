import React, {useEffect,useState} from 'react';
import axios from 'axios';
import RecipesCard from '../components/home/RecipesCard';
import Spinner from '../components/Spinner';
import Header from '../components/Header'
// import { Link} from "react-router-dom";



const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    async function getData(){
      try{
        const res = await fetch('/backend/recipes',{
          method:'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const data = await res.json()
        setLoading(false)
        setRecipes(data.data)
        // console.log(data.data);

      }catch(error){
        console.log(error);
      }
    }
    getData()

  }, []);

  return (
    <div>
        <Header/>

        {loading ? (
          <div className='flex justify-center h-dvh pt-52'>
            <Spinner />
          </div>
            
        ) : (
            <RecipesCard recipes={recipes}/>
        )}

    </div>
    

  )
}

export default Home;