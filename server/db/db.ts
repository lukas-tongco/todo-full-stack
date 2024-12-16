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

export function updateTodoStatus(id: number, active: boolean) {
  return db('todos').where({ id }).update({ active })
}

export function deleteTodo(id: number) {
  return db('todos').where({ id }).del()
}

// export function close() {
//   db.destroy()
// }
