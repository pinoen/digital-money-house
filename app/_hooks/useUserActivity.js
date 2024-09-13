import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export const useUserActivity = (id, jwt) => {
  const { data } = useQuery({
    queryKey: ['activity'],
    queryFn: () => {
      return axios.get(`https://digitalmoney.digitalhouse.com/api/accounts/${id}/activity`, {
        headers: {
          'Authorization': jwt
        }
      })
    },
  })
  return data?.data
}