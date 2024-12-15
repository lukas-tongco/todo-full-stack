interface Props {
  name: string
  details?: string
  priority: number
  status: string
}

export default function Todo({
  name,
  details = 'None provided',
  priority,
  status,
}: Props) {
  return (
    <>
      <p>
        <strong>{name}</strong>
      </p>
      <p>Description: {details}</p>
      <p>
        Priority: {priority === 1 && 'Low'} {priority === 2 && 'Normal'}{' '}
        {priority === 3 && 'Urgent'}
      </p>
      <p>Status: {status}</p>
    </>
  )
}
