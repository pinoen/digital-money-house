import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://digitalmoney.digitalhouse.com/api'

export const useUserAccount = (jwt) => {
  const { data, ...rest } = useQuery({
    queryKey: ['account'],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/account`, {
        headers: {
          'Authorization': jwt
        }
      })
      return response.data
    },
    enabled: !!jwt
  })

  return {
    cvu: data?.cvu || '',
    id: data?.id || '',
    alias: data?.alias || '',
    available_amount: data?.available_amount || '',
    user_id: data?.user_id || '',
    ...rest
  }
}
