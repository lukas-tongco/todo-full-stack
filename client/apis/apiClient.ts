import request from 'superagent'
import { Todo, TodoData } from '../../models/todos'

const rootURL = '/api/v1/todos'

export async function fetchTodos(): Promise<Todo[]> {
  const res = await request.get(rootURL)
  return res.body // as Todo[]
}

export async function fetchTodoById(id: number): Promise<Todo> {
  const res = await request.get(`${rootURL}/${id}`)
  return res.body
}

export async function addTodo(newTodo: TodoData) {
  await request.post(rootURL).send(newTodo)
}

export async function updateTodoStatus(
  id: number,
  active: boolean,
): Promise<void> {
  await request.patch(`${rootURL}/${id}`).send({ active })
}

export async function deleteTodo(id: number) {
  await request.delete(`${rootURL}/${id}`)
}
