export interface Todo {
  id: number
  name: string
  details?: string // "?" means it can be NULL, left blank, optional
  priority: number
  status: string
}
