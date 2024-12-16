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
          {/* <input className="toggle" type="checkbox" checked={!active} /> */}
          <UpdateTodoStatus id={id} active={active} />
          <label>{name}</label>
          <DeleteTodo id={id} />
        </div>
      </li>
    </>
  )
}
