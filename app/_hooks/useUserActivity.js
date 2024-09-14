import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://digitalmoney.digitalhouse.com/api';

export const useUserActivity = (id, jwt) => {
  const { data } = useQuery({
    queryKey: ['activity', id],
    queryFn: () => {
      return axios.get(`${API_URL}/accounts/${id}/activity`, {
        headers: {
          Authorization: jwt,
        },
      });
    },
    enabled: !!jwt && !!id,
  });
  return data?.data;
};
