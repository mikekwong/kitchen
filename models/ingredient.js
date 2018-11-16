const Sequelize = require('sequelize')
const db = require('./db')

const Ingredient = db.define('ingredient', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

// Step.belongsTo(Recipe)
// Recipe.hasOne(Step)

module.exports = Ingredient

// https://grokonez.com/node-js/sequelize-many-to-many-association-nodejs-express-mysql#Sequelize_Many-To-Many
