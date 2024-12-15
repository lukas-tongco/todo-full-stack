import Todo from './Todo'

export default function TodoList() {
  // Dummy data for testing
  const todos = [
    { name: 'Test Task 1', priority: 2, status: 'Pending' },
    {
      name: 'Test Task 2',
      details: 'Test details 2',
      priority: 3,
      status: 'Pending',
    },
    {
      name: 'Test Task 3',
      details: 'Test details 3',
      priority: 1,
      status: 'Completed',
    },
  ]

  return (
    <>
      {todos.map((todo, i) => {
        return (
          <Todo
            key={i}
            name={todo.name}
            details={todo.details}
            priority={todo.priority}
            status={todo.status}
          />
        )
      })}
    </>
  )
}
