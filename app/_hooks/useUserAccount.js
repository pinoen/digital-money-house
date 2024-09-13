import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useUserAccount = (jwt) => {
  return useQuery({
    queryKey: ['account'],
    queryFn: async () => {
      const response = await axios.get(`https://digitalmoney.digitalhouse.com/api/account`, {
        headers: {
          'Authorization': jwt
        }
      })
      return response.data
    },
    enabled: !!jwt
  })
}
