const db = require('./models/db')
const { green, red } = require('chalk')
// const { Ingredient } = require('./server/db/models/ingredient')
// const { Student } = require('./server/db/models/student')

const {
  recipe: Recipe,
  ingredient: Ingredient,
  ingredient_recipe: IngredientRecipe
} = db.models

const seed = async () => {
  try {
    await db.sync({ force: true })
    const ingredientData = [
      {
        name: 'Basil'
      },
      {
        name: 'Beef'
      },
      {
        name: 'Ground Beef'
      },
      {
        name: 'Pork'
      },
      {
        name: 'Cabbage'
      },
      {
        name: 'Broccoli'
      },
      {
        name: 'Red Bell Pepper'
      },
      {
        name: 'Carrots'
      },
      {
        name: 'Garlic'
      },
      {
        name: 'Ginger'
      },
      {
        name: 'Shallots'
      },
      {
        name: 'Basil'
      },
      {
        name: 'Cilantro'
      },
      {
        name: 'Vegetable Oil'
      },
      {
        name: 'Soy Sauce'
      },
      {
        name: 'Corn Starch'
      },
      {
        name: 'Sugar'
      },
      {
        name: 'Crushed Red Pepper'
      },
      {
        name: 'Onion'
      },
      {
        name: 'Rice Vinegar'
      }
    ]
    const [
      basil,
      beef,
      ground_beef,
      pork,
      cabbage,
      broccoli,
      red_bell_pepper,
      carrots,
      garlic,
      ginger,
      shallots,
      cilantro,
      vegetable_oil,
      soy_sauce,
      corn_starch,
      sugar,
      crushed_red_pepper,
      onion,
      rice_vinegar
    ] = await Ingredient.bulkCreate(ingredientData, {
      returning: true
    })

    const recipeData = [
      {
        name: 'Black_Pepper_Beef_and_Cabbage',
        steps: '',
        minutes: 30,
        servings: 4,
        calories: 280,
        favorite: false,
        imgURL: 'https://images.media-allrecipes.com/userphotos/560x315/5181801.jpg'
      },
      {
        name: 'Hot_and_Tangy_Broccoli_Beef',
        steps: '',
        minutes: 15,
        servings: 4,
        calories: 350,
        favorite: false,
        imgURL: 'https://images.media-allrecipes.com/userphotos/560x315/5181801.jpg'
      },
      {
        name: 'Quick_Beef_Stir_Fry',
        steps: '',
        minutes: 15,
        servings: 4,
        calories: 350,
        favorite: true,
        imgURL: 'https://images.media-allrecipes.com/userphotos/560x315/5181801.jpg'
      }
    ]
    const [
      Black_Pepper_Beef_and_Cabbage,
      Hot_and_Tangy_Broccoli_Beef,
      Quick_Beef_Stir_Fry
    ] = await Recipe.bulkCreate(recipeData, { returning: true })

    const ingredientRecipeData = [
      {
        ingredientId: basil.id,
        recipeId: Black_Pepper_Beef_and_Cabbage.id
      },
      {
        ingredientId: beef.id,
        recipeId: Black_Pepper_Beef_and_Cabbage.id
      },
      {
        ingredientId: ground_beef.id,
        recipeId: Black_Pepper_Beef_and_Cabbage.id
      },
      {
        ingredientId: pork.id,
        recipeId: Black_Pepper_Beef_and_Cabbage.id
      },
      {
        ingredientId: basil.id,
        recipeId: Hot_and_Tangy_Broccoli_Beef
      },
      {
        ingredientId: ground_beef.id,
        recipeId: Hot_and_Tangy_Broccoli_Beef
      },
      {
        ingredientId: cabbage.id,
        recipeId: Hot_and_Tangy_Broccoli_Beef
      }
    ]
    await IngredientRecipe.bulkCreate(ingredientRecipeData)
    console.log(green('Database synced!'))
  } catch (err) {
    console.log(red('Disaster! Something went wrong!'))
    console.log(err)
  } finally {
    db.close()
  }
}

seed()
