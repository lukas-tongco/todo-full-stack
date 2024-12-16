import DeleteTodo from './DeleteTodo'
import UpdateTodoStatus from './UpdateTodoStatus'

interface Props {
  id: number
  name: string
  active: boolean
}

export default function Todo({ id, name, active }: Props) {
  return (
    <>
      <li className={!active ? 'completed' : ''}>
        <div className="view">
          <form>
            <input
              type="checkbox"
              id={`todo-${id}`}
              style={{ display: 'none' }}
              aria-label={`Toggle status for ${name}`}
            />
            <UpdateTodoStatus id={id} active={active} />
            <label htmlFor={`todo-${id}`}>{name}</label>
          </form>
          <DeleteTodo id={id} />
        </div>
      </li>
    </>
  )
}
