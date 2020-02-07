const express = require('express');
const Recipes = require('./recipe-model.js')
const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes' })
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    Recipes.getById(id)
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes' })
    })
})

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
    .then(shop => {
      if (shop.length) {
        res.json(shop);
      } else {
        res.status(404).json({ message: 'Could not find shopping list' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get shopping list' });
    });
  });
  

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
    .then(shop => {
      if (shop.length) {
        res.json(shop);
      } else {
        res.status(404).json({ message: 'Could not find instructions' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get instructions' });
    });
})

module.exports = router