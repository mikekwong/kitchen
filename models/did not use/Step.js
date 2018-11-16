const Sequelize = require('sequelize')
const db = require('../db')

const Step = db.define('steps', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

// Step.belongsTo(Recipe)
// Recipe.hasOne(Step)

Recipe.belongsToMany(Ingredient, { through: 'Ingredient_Recipe' })
Ingredient.belongsToMany(Recipe, { through: 'Ingredient_Recipe' })

module.exports = {
  db,
  Step
}

// https://grokonez.com/node-js/sequelize-many-to-many-association-nodejs-express-mysql#Sequelize_Many-To-Many
