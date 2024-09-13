import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useUserAccount = (jwt) => {
  const { data, ...rest } = useQuery({
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

  return {
    cvu: data?.cvu || '',
    id: data?.id || '',
    alias: data?.alias || '',
    available_amount: data?.available_amount || '',
    user_id: data?.user_id || '',
    ...rest
  }
}
