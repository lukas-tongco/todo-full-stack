import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTodoStatus } from '../apis/apiClient'

interface Props {
  id: number
  active: boolean
}

export default function UpdateTodoStatus({ id, active }: Props) {
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: (newStatus: boolean) => updateTodoStatus(id, newStatus),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] }) // Refresh the todos list
    },
  })

  const handleStatusChange = () => {
    updateMutation.mutate(!active) // Toggle active status
  }

  return (
    <input
      className="toggle"
      type="checkbox"
      checked={!active} // Check if the todo is completed (active is false)
      onChange={handleStatusChange}
    />
  )
}
