import connection from './connection'
import { Todo } from '../../models/todos'

const db = connection

export function getTodos(): Promise<Todo[]> {
  return db('todos').select()
}

export function getTodoById(id: number): Promise<Todo> {
  return db('todos').where({ id }).select().first()
}

export function addTodo(newTodo: Todo) {
  return db('todos').insert(newTodo)
}

export function updateStatusCompleted(id: number) {
  return db('todos').where({ id }).update('status', 'completed')
}

export function updateStatusPending(id: number) {
  return db('todos').where({ id }).update('status', 'pending')
}

export function updatePriority1(id: number) {
  return db('todos').where({ id }).update('priority', 1)
}

export function updatePriority2(id: number) {
  return db('todos').where({ id }).update('priority', 2)
}

export function updatePriority3(id: number) {
  return db('todos').where({ id }).update('priority', 3)
}

export function deleteTodo(id: number) {
  return db('todos').where({ id }).del()
}

// export function close() {
//   db.destroy()
// }
