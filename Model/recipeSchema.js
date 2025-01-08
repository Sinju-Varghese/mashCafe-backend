// import mongoose 
const mongoose = require('mongoose')

//schema creation 
const recipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
       },
       ingredients:{
        type:Array,
        required:true
       },
       instructions:{
        type:Array,
        required:true
       },
       prepTimeMinutes:{
        type:Number,
        required:true
       },
       cookTimeMinutes:{
        type:Number,
        required:true
       },
       servings:{
        type:Number,
        required:true
       },
       difficulty:{
        type:String,
        required:true
       },
       cuisine:{
        type:String,
        required:true
       },
       caloriesPerServing:{
        type:Number,
        required:true
       },
       tags:{
        type:Array,
        required:true
       },
       userId:{
        type:Number,
        required:true
       },
       cuisine:{
        type:String,
        required:true
       },
       image:{
        type:String,
        required:true
       },
       rating:{
        type:Number,
        required:true
       },
       reviewCount:{
        type:Number,
        required:true
       },
       mealType:{
        type:Array,
        required:true
      } 
    
})
const recipe=mongoose.model('recipe',recipeSchema)
module.exports = recipe