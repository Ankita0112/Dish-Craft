import FavSingleCard from './FavSingleCard';
import React from 'react';

const FavCard = ({recipes}) => {
    // console.log("reached fav card")
    // console.log("recipes from fav card",recipes);

    return (
        <div>
            <div className="grid grid-cols-4 pr-12">
                {recipes.map((item) => {
                    // console.log("reached inside map");
                    return (
                        <FavSingleCard key={item._id} recipe={item} />
                    )
                })}
            </div>

            
        </div>
        
    )
}

export default FavCard;