import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://digitalmoney.digitalhouse.com/api'

export const useCreateTransaction = (accountId, jwt, params) => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const { mutate, ...rest } = useMutation({
    mutationFn: (data) => {
      return axios.post(`${API_URL}/accounts/${accountId}/transactions`, data, {
        headers: {
          'Authorization': jwt
        }
      })
    },
    onSuccess: () => {
      console.log('Transaction created successfully')
      queryClient.invalidateQueries(['transactions', 'account', 'activity', 'cards', 'user'])
    },
    onError: (error) => {
      console.error('Error creating transaction:', error)
      router.push(`/services/${params.service}/payment/fail`)
    },
  })

  return { mutate, ...rest }
}