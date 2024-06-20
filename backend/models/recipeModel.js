import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
    {   
        // _id: {
        //     type: String,
        //     required: true,
        // },
        Title: {
            type: String,
            required: true,
        },
        Ingredients: {
            type: String,
            required: true,
        },
        Instructions: {
            type: String,
            required: true,
        },
        Image_Name: {
            type: String,
            required: true,
        },

    },

)

export const Recipe = mongoose.model('Recipe',recipeSchema);