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
      id: 1,
      name: 'Buy groceries',
      details: 'Buy milk, eggs, and bread at the market.',
      priority: 2,
      status: 'Completed',
    },
    {
      id: 2,
      name: 'Complete project',
      details: 'Push code to GitHub and submit on Trello.',
      priority: 3,
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Mow the lawn',
      details: 'Mow the front and backyard when you have time.',
      priority: 1,
      status: 'Pending',
    },
  ])
}
