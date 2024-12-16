import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { addTodo } from '../apis/apiClient'
import { TodoData } from '../../models/todos'

// eslint-disable-next-line no-unused-vars
export default function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const queryClient = useQueryClient()
  const addMutation = useMutation({
    mutationFn: (todo: TodoData) => addTodo(todo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // Prevents automatically submitting data as a query
    addMutation.mutate({ name: newTodo, active: true })
    setNewTodo('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={true}
          onChange={handleChange}
          value={newTodo}
        />
      </form>
    </>
  )
}
