'use strict'

const db = require('./db')
const Ingredient = require('./ingredient')
const Recipe = require('./recipe')

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).
// Example:
//
// const Puppy = require('./puppy')
// const Owner = require('./owner')

// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!
// Example:
//
// Puppy.belongsTo(Owner)
//

Recipe.belongsToMany(Ingredient, { through: 'Ingredient_Recipe' })
Ingredient.belongsToMany(Recipe, { through: 'Ingredient_Recipe' })

module.exports = {
  // Include your models in this exports object as well!
  db,
  Ingredient,
  Recipe
}
