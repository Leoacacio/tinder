/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('empresas').then (function(exist){
    if(!exist){
        return knex.schema.createTable('empresas',function(table){
            table.increments('id empresa').primary();
            table.string('nombre empresa').notNullable();
            
        })
    }
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable("empresas").then(function(exist){
  if(exist){
    return knex.schema.dropTable("empresas");
  }
})
};
