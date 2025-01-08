const recipe = require('../Model/recipeSchema')

exports.getAllRecipes = async (req,res)=>{
    console.log("Inside get recipes")
    try{
        const allRecipes = await recipe.find()
        res.status(200).json(allRecipes)
    }
    catch(err){
        res.status(404).json("Error" +err)
    }
}