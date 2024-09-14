import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://digitalmoney.digitalhouse.com/api'

export const useUpdateUserData = (userId, jwt) => {
  const queryClient = useQueryClient()

  const { mutate, ...rest } = useMutation({
    mutationFn: (data) => {
      return axios.patch(`${API_URL}/users/${userId}`, data, {
        headers: {
          'Authorization': jwt
        }
      })
    },
    onSuccess: () => {
      console.log('User data updated successfully')
      queryClient.invalidateQueries(['user'])
    },
    onError: (error) => {
      console.error('Error updating user data:', error)
    },
  })

  return { mutate, ...rest }
}