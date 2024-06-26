import ReactPaginate from 'react-paginate';
import RecipeSingleCard from './RecipeSingleCard'
import React from 'react';
import { useState } from 'react';

const RecipesCard = ({recipes}) => {
    
    const [recipeInfo , setRecipeInfo] = useState(recipes.slice(0,160));
    const [pageNumber , setPageNumber] = useState(0);
    const recipePerPage = 24;
    const recipeVisited = pageNumber * recipePerPage;

    const displayRecipe = recipeInfo
        .slice(recipeVisited , recipeVisited + recipePerPage)
        .map((item) => {
            return (
                <RecipeSingleCard key={item._id} recipe={item} />
            );
        });

    const pageCount = Math.ceil(recipeInfo.length / recipePerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

  
    return (
        <div>
            <div className="grid grid-cols-4 pr-12">
                {displayRecipe}
            </div>
            <div className='flex justify-center'>
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName='my-4 inline-flex mx-20 -space-x-30 text-base h-10'
                previousClassName='flex items-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-900 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                nextClassName='flex items-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-900 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                pageClassName='flex items-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-900 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                disabledClassName='flex items-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-900 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                activeClassName='flex items-center px-4 h-10 text-blue-600 border border-gray-900 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
             
            />  
            </div>
            
        </div>
        
    )
}

export default RecipesCard;
