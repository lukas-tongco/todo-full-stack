import connection from './connection'
import { Todo } from '../../models/todos'

const db = connection

// Create "addTodo" function
export function addTodo(): Promise<Todo[]> {
  return db('todos').insert({ id })
}

export function getTodos(): Promise<Todo[]> {
  return db('todos').select()
}

export function getTodoById(id: number): Promise<Todo> {
  return db('todos').where({ id }).select().first()
}

// Create "updateTodo" function

export function delTodoById(id: number) {
  return db('todos').where({ id }).del()
}
