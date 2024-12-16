import { Router } from 'express'
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
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const todo = await db.getTodoById(id)
    res.json(todo)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// POST 'api/v1/todos/'
router.post('/', async (req, res) => {
  const newTodo = req.body
  try {
    await db.addTodo(newTodo)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

//PATCH 'api/v1/videos/todos/:id'
router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const { active } = req.body
  try {
    await db.updateTodoStatus(id, active)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// DEL 'api/v1/todos/:id'
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteTodo(id)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

export default router
