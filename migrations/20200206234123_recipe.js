
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments();
      tbl.text('recipe_name', 128)
      .notNullable()
      tbl.integer('instruction_id')
      .notNullable()
      .unsigned()
      // .references('id')
      // .inTable('instructions')
      // .onUpdate('CASCADE')
      // .onDelete('CASCADE')
  })
  .createTable('shoppinglist', tbl => {
    tbl.increments();
    tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
    tbl.text('ingredients')
        .notNullable()
    tbl.text('quantity')
        .notNullable()
        // .references('id')
        // .inTable('recipes')
        // .onUpdate('CASCADE')
        // .onDelete('CASCADE')
    tbl.text('categories')
        .notNullable()
})
.createTable('instructions', tbl => {
    tbl.text('instructions')
    .notNullable()
    tbl.text('notes')
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipes')
  .dropTableIfExists('shoppinglist')
  .dropTableIfExists('instructions');
};
