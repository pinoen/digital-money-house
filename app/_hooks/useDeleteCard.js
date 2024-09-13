import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useDeleteCard = (accountId, cardId, jwt) => {
  const queryClient = useQueryClient()
  const { mutate, ...rest } = useMutation({
    mutationFn: () => {
      return axios.delete(`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/cards/${cardId}`, {
        headers: {
          'Authorization': jwt
        }
      })
    },
    onSuccess: () => {
      console.log('Card deleted successfully')
      queryClient.invalidateQueries(['cards'])
    },
    onError: (error) => {
      console.error('Error deleting card:', error)
    },
  })

  return { mutate, ...rest }
}
