import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useUserData = (id, jwt) => {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      return axios.get(`https://digitalmoney.digitalhouse.com/api/users/${id}`, {
        headers: {
          'Authorization': jwt
        }
      })
    },
  })

  return data?.data
}
