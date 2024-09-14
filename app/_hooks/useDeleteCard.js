import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://digitalmoney.digitalhouse.com/api'

export const useDeleteCard = (accountId, cardId, jwt) => {
  const queryClient = useQueryClient()
  const { mutate, ...rest } = useMutation({
    mutationFn: () => {
      return axios.delete(`${API_URL}/accounts/${accountId}/cards/${cardId}`, {
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
