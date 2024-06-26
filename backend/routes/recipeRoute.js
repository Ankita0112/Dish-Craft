import express from "express";
import { Recipe } from "../models/recipeModel.js";
// import { UserRecipe } from "../models/recipeModel.js";

const router = express.Router();

  
// Dish Craft Recipe
router.get("/",async(req,res)=>{
try{
    const recipes = await Recipe.find({});

    return res.status(200).json({
    count:recipes.length,
    data:recipes
    });
} catch(error){
    console.log(error.message);
    res.status(500).send({message: error.message});
}
});

router.get("/:id",async(req,res)=>{
try{

    const {id} = req.params;

    const recipe = await Recipe.findById(id);

    return res.status(200).json(recipe);
} catch(error){
    console.log(error.message);
    res.status(500).send({message: error.message});
}
})

export default router;