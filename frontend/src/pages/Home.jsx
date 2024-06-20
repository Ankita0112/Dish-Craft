// import React from 'react'
// import Header from '../components/Header'

// export default function Home() {
//   return (
//     <div>
//       <Header/>
//       <div>Home</div>
//     </div>
    
//   )
// }

import React, {useEffect,useState} from 'react';
import axios from 'axios';
import RecipesCard from '../components/home/RecipesCard';
// import Spinner from '../components/Spinner';
import Header from '../components/Header'
// import { Link} from "react-router-dom";



const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3000/backend/recipes')
      .then((res)=>{
        setRecipes(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  console.log("hi")
  return (
    <div>
        <Header/>

        {loading ? (
          <div className='flex justify-center h-dvh pt-52'>
            hi
            {/* <Spinner /> */}
          </div>
            
        ) : (
          // <div>
          //   bye
          //   {/* <Spinner /> */}
          // </div>
            <RecipesCard recipes={recipes}/>
        )}

    </div>
    

  )
}

export default Home;