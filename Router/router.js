const express = require('express')

const recipeController = require('../Controller/recipeController')
const userController = require('../Controller/userController')
const testimonalController=require('../Controller/testimonalController')

const router = new express.Router()

router.get('/api/getAllRecipes',recipeController.getAllRecipes)
router.post('/add-Testimony',testimonalController.addTestimony)
router.post('/register',userController.register)
router.post('/login',userController.login)

module.exports = router