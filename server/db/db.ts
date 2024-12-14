import connection from './connection'
import { Todo } from '../../models/todos'

const db = connection

export function getTodos(): Promise<Todo[]> {
  return db('todos').select()
}

// export function addTodo(name: string) {
//   return db('todos').insert({ name }).returning('id')
// }
export function addTodo(newTodo: Todo) {
  return db('todos').insert(newTodo)
}

export function getTodoById(id: number): Promise<Todo> {
  return db('todos').where({ id }).select().first()
}

// export function updateTodo(id: number, status: string) {
//   return db('todos').update({ status }).where({ id })
// }
export function updateStatusComplete(id: number) {
  return db('todos').where({ id }).update('status', 'completed')
}

export function updateStatusPending(id: number) {
  return db('todos').where({ id }).update('status', 'pending')
}

export function deleteTodo(id: number) {
  return db('todos').where({ id }).del()
}

// export function close() {
//   db.destroy()
// }
