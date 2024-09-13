import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useUserData = (id, jwt) => {
  const { data, ...rest } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await axios.get(`https://digitalmoney.digitalhouse.com/api/users/${id}`, {
        headers: {
          'Authorization': jwt
        }
      })
      return response.data
    },
    enabled: !!jwt && !!id
  })

  return {
    id: data?.id || '',
    email: data?.email || '',
    firstname: data?.firstname || '',
    lastname: data?.lastname || '',
    dni: data?.dni || '',
    phone: data?.phone || '',
    ...rest
  }
}
