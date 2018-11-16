const Sequelize = require('sequelize')
const db = require('./db')

const { STRING, TEXT, INTEGER, BOOLEAN } = Sequelize

const Recipe = db.define('recipe', {
  name: {
    type: STRING,
    allowNull: false // name MUST have a value
  },
  steps: {
    type: TEXT,
    allowNull: false
  },
  minutes: {
    type: INTEGER,
    defaultValue: 25, // automatically set to 25mins if no value set
    validate: {
      min: 15,
      max: 40
    }
  },
  servings: {
    type: INTEGER,
    defaultValue: 4, // auto set to 4 servings if no value set
    validate: {
      min: 1,
      max: 5
    }
  },
  calories: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 200,
      max: 400
    }
  },
  favorite: {
    type: BOOLEAN,
    defaultValue: true
  },
  imgURL: {
    type: STRING,
    allowNull: false
  }
})
// Recipes.associate = (models) => {
//   Recipes.belongsToMany(models.Ingredients, {
//     through: 'Ingredients_Recipes',
//     foreignKey: 'recipeId'
//   });
//   return Recipes
// };

// Step.belongsTo(Recipe)
// Recipe.hasOne(Step)

module.exports = Recipe

// https://grokonez.com/node-js/sequelize-many-to-many-association-nodejs-express-mysql#Sequelize_Many-To-Many
