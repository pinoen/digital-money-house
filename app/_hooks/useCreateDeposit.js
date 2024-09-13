import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useCreateDeposit = (accountId, jwt) => {
  const queryClient = useQueryClient()

  const { mutate, ...rest } = useMutation({
    mutationFn: (data) => {
      return axios.post(`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/deposits`, data, {
        headers: {
          'Authorization': jwt
        }
      })
    },
    onSuccess: () => {
      console.log('Deposit created successfully')
      queryClient.invalidateQueries(['deposits', 'account', 'activity', 'cards', 'user'])
    },
    onError: (error) => {
      console.error('Error creating deposit:', error)
    },
  })

  return { mutate, ...rest }
}