import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useUserAccount = (jwt) => {
  const { data } = useQuery({
    queryKey: ['account'],
    queryFn: () => {
      return axios.get(`https://digitalmoney.digitalhouse.com/api/account`, {
        headers: {
          'Authorization': jwt
        }
      })
    },
  })
  return data?.data
}
