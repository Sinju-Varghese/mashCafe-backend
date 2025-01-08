const express = require('express')

const recipeController = require('../Controller/recipeController')

const router = new express.Router()

router.get('/api/getAllRecipes',recipeController.getAllRecipes)

module.exports = router