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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleStatusChange()
    }
  }

  return (
    <input
      aria-label="Toggle status"
      className="toggle"
      type="checkbox"
      checked={!active} // Check if the todo is completed (active is false)
      onChange={handleStatusChange}
      onKeyDown={handleKeyDown}
      aria-checked={!active}
      tabIndex={0}
    />
  )
}
