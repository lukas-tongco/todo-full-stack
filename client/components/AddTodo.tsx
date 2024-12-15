import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { addTodo } from '../apis/apiClient'
import { Todo } from '../../models/todos'

// eslint-disable-next-line no-unused-vars
export default function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  // const [submitTodo, setSubmitTodo] = useState('')
  const addMutation = useMutation({ mutationFn: (todo: Todo) => addTodo(todo) })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // Prevents automatically submitting data as a query
    // setSubmitTodo(newTodo)
    setNewTodo('')
  }

  return (
    <>
      <p>{newTodo}</p>
      <p>Submitted: {submitTodo}</p>

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
