
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('recipes').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Mac n Cheese', instruction_id: 1},
        { recipe_name: 'Corn on a Cob', instruction_id: 2},
        { recipe_name: 'Chicken and Dumplings', instruction_id: 3}
      ]);
    // });
};
