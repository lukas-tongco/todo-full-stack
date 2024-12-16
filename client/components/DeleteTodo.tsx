import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTodo } from '../apis/apiClient'

interface Props {
  id: number
}

export default function DeleteTodo({ id }: Props) {
  const queryClient = useQueryClient()
  const deleteMutation = useMutation({
    mutationFn: () => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleDelete = () => {
    deleteMutation.mutate()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleDelete()
    }
  }

  return (
    <button
      className="destroy"
      onClick={handleDelete}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      ×
    </button>
  )
}
