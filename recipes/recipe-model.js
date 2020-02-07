const db = require('../data/db-config.js')

function getRecipes() {
    return db('recipes');
}

function getById(id) {
    return db('recipes').where({ id }).first();
}

function getShoppingList(id) {
    return db('shoppinglist as sl')
    .join('recipes as r', 'r.id', 'sl.recipe_id')
    .select('sl.id', 'r.recipe_name', 'sl.ingredients', 'sl.quantity', 'sl.categories')
    .where({ recipe_id: id })
}

function getInstructions(id) {
    return db('recipes as r')
    .join('instructions as i', 'i.id', 'r.instruction_id')
    .select('r.id', 'r.recipe_name', 'i.instructions', 'i.notes')
    .where({ instruction_id: id })

}


module.exports = {
getRecipes,
getById,
getShoppingList,
getInstructions
};

