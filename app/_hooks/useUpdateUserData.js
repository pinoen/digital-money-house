import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"


export const useUpdateUserData = (userId, jwt) => {
  const queryClient = useQueryClient()

  const { mutate, ...rest } = useMutation({
    mutationFn: (data) => {
      return axios.patch(`https://digitalmoney.digitalhouse.com/api/users/${userId}`, data, {
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