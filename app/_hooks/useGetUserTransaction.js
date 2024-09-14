import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://digitalmoney.digitalhouse.com/api';

export const useGetUserTransaction = (accoundId, id, jwt) => {
  const { data } = useQuery({
    queryKey: ['transaction', accoundId, id],
    queryFn: () => {
      return axios.get(`${API_URL}/accounts/${accoundId}/transactions/${id}`, {
        headers: {
          Authorization: jwt,
        },
      });
    },
    enabled: !!jwt && !!accoundId && !!id,
  });
  return data?.data;
};
