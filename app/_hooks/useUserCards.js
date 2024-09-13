import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useUserCards = (accountId, jwt) => {
  const { data } = useQuery({
    queryKey: ['cards'],
    queryFn: () => {
      return axios.get(`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/cards`, {
        headers: {
          'Authorization': jwt
        }
      })
    },
  })
  return data?.data
}