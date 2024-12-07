// Knex documentation: https://knexjs.org/guide/

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//

// Originally "exports.up = function(knex)"
export function up(knex) {
  // Schema Builder > createTable
  // Originally "knex.schema.createTable('todos', function (table) {}"
  return knex.schema.createTable('todos', (table) => {
    table.increments()
    table.string('name').notNullable() // Field must always be filled and can't be blank
    table.text('details')
    table.integer('priority').defaultTo(1) // 1 = Low, 2 = Medium, 3 = High
    table.string('status').defaultTo('pending') // pending or completed
    table.timestamps()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Originally "exports.down = function(knex)"
export function down(knex) {
  return knex.schema.dropTable('todos')
}
