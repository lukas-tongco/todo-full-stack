import { useQuery } from '@tanstack/react-query'
import Todo from './Todo'
import { fetchTodos } from '../apis/apiClient'

export default function TodoList() {
  // Dummy data for testing
  // const todos = [
  //   { name: 'Test Task 1', priority: 2, status: 'Pending' },
  //   {
  //     name: 'Test Task 2',
  //     details: 'Test details 2',
  //     priority: 3,
  //     status: 'Pending',
  //   },
  //   {
  //     name: 'Test Task 3',
  //     details: 'Test details 3',
  //     priority: 1,
  //     status: 'Completed',
  //   },
  // ]

  // Gets data from the database
  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetchTodos(),
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error...</p>
  }

  return (
    <>
      {todos.map((todo, i) => {
        return (
          <Todo
            key={i}
            name={todo.name}
            // details={todo.details}
            // priority={todo.priority}
            active={todo.active}
          />
        )
      })}
    </>
  )
}
