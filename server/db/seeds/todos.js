/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Originally "exports.seed = async function(knex)"
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {
      name: 'Buy groceries',
      active: true,
    },
    {
      name: 'Complete project',
      active: true,
    },
    {
      name: 'Mow the lawn',
      active: false,
    },
  ])
}
