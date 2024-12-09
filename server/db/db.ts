import connection from './connection'
import { Todo } from '../../models/todos'

const db = connection

export function addTodo(name: string) {
  return db('todos').insert({ name }).returning('id')
}

export function getTodos(): Promise<Todo[]> {
  return db('todos').select()
}

export function getTodoById(id: number): Promise<Todo> {
  return db('todos').where({ id }).select().first()
}

export function updateTodo(id: number, status: string) {
  return db('todos').update({ status }).where({ id })
}

export function delTodoById(id: number) {
  return db('todos').where({ id }).del()
}

export function close() {
  db.destroy()
}
