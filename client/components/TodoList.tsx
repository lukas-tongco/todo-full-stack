import { useQuery } from '@tanstack/react-query'
import Todo from './Todo'
import { fetchTodos } from '../apis/apiClient'

export default function TodoList() {
  // Gets data from the database
  const {
    data: todos,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  if (!todos || todos.length === 0) {
    return <p>No todos available</p>
  }

  return (
    <>
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              active={todo.active}
            />
          )
        })}
      </ul>
    </>
  )
}
