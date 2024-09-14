import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://digitalmoney.digitalhouse.com/api';

export const useCardData = (accountId, cardId, jwt) => {
  const { data } = useQuery({
    queryKey: ['card'],
    queryFn: () => {
      return axios.get(`${API_URL}/accounts/${accountId}/cards/${cardId}`, {
        headers: {
          Authorization: jwt,
        },
      });
    },
    enabled: !!jwt && !!accountId && !!cardId,
  });

  return data?.data;
};
