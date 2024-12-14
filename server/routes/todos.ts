import Router from 'express'
import * as db from '../db/db.ts' // lets you access your functions in db.ts

const router = Router()

// Test these routes using Postman

// GET 'api/v1/todos'
router.get('/', async (req, res) => {
  try {
    const todos = await db.getTodos()
    res.json(todos)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500) // 500 is the universal database error
  }
})

// GET 'api/v1/todos/:id'

// POST 'api/v1/todos/'

// DEL 'api/v1/todos/:id'

export default Router
