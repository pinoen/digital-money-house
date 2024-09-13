import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"


export const useCreateCard = (accountId, jwt) => {
  const queryClient = useQueryClient()

  const { mutate, ...rest } = useMutation({
    mutationFn: (data) => {
      return axios.post(`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/cards`, data, {
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