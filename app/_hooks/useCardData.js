import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useCardData = (accountId, cardId, jwt) => {
  const { data } = useQuery({
    queryKey: ['card'],
    queryFn: () => {
      return axios.get(`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/cards/${cardId}`, {
        headers: {
          'Authorization': jwt
        }
      })
    }
  })

  return data?.data
}