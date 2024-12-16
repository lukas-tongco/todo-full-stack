export interface TodoData {
  name: string
  active: boolean
}

// Contains everything in TodoData and adds on 'id'
export interface Todo extends TodoData {
  id: number
}
