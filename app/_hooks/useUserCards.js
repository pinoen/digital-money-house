import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://digitalmoney.digitalhouse.com/api'

export const useUserCards = (accountId, jwt) => {
  const { data } = useQuery({
    queryKey: ['cards', accountId],
    queryFn: () => {
      return axios.get(`${API_URL}/accounts/${accountId}/cards`, {
        headers: {
          'Authorization': jwt
        }
      })
    },
    enabled: !!jwt && !!accountId
  })
  return data?.data
}