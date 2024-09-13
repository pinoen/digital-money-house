import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetUserTransaction = (accoundId, id, jwt) => {
  const { data } = useQuery({
    queryKey: ['transaction'],
    queryFn: () => {
      return axios.get(`https://digitalmoney.digitalhouse.com/api/accounts/${accoundId}/transactions/${id}`, {
        headers: {
          'Authorization': jwt
        }
      })
    },
  })
  return data?.data
}