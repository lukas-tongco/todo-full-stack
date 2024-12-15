// eslint-disable-next-line no-unused-vars

import { useState } from 'react'

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const [submitTodo, setSubmitTodo] = useState('')

  const handleChange = (e) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault() // Prevents automatically submitting data as a query
    setSubmitTodo(newTodo)
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
          autoFocus={true}
          onChange={handleChange}
          value={newTodo}
        />
      </form>
    </>
  )
}
