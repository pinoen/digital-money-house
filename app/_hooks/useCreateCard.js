import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://digitalmoney.digitalhouse.com/api'

export const useCreateCard = (accountId, jwt) => {
  const queryClient = useQueryClient()

  const { mutate, ...rest } = useMutation({
    mutationFn: (data) => {
      return axios.post(`${API_URL}/accounts/${accountId}/cards`, data, {
        headers: {
          'Authorization': jwt
        }
      })
    },
    onSuccess: () => {
      console.log('Card created successfully')
      queryClient.invalidateQueries(['cards', 'account', 'activity', 'user'])
    },
    onError: (error) => {
      console.error('Error creating card:', error)
    },
  })

  return { mutate, ...rest }
}