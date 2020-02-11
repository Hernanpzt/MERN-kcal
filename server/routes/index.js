const express = require('express');
const router = express.Router();

const foodTypes = require('./foodTypes')
const mealTypes = require('./mealTypes')
const meal = require('./meal')

module.exports = app => {
    router.get('/', (req, res) =>{

        res.send(`hola hackademy desde express index.js`)
    })

    router.post('/catalogs/foodTypes', foodTypes.addFoodType);
    router.get('/catalogs/foodTypes', foodTypes.getFoodTypes );

    router.post('/catalogs/mealTypes', mealTypes.addMealType);
    router.get('/catalogs/mealTypes', mealTypes.getMealType);

    router.post('/meals', meal.addMeal);


    app.use('/api', router)
}