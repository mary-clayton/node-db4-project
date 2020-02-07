
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('shoppinglist').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('shoppinglist').insert([
        { recipe_id: 1, ingredients: 'cheese, macaroni' , quantity: 2, categories: 'Grains'},
        { recipe_id: 2, ingredients: 'butter, unhusked corn', quantity: 2, categories: 'Vegetables'},
        { recipe_id: 3, ingredients: 'boneless chicken, biscuits, chicken gravy', quantity: 3,  categories: 'Grains, Poultry'}
      ]);
    // });
};
