import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://digitalmoney.digitalhouse.com/api';

export const useUserData = (id, jwt) => {
  const { data, ...rest } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/users/${id}`, {
        headers: {
          Authorization: jwt,
        },
      });
      return response.data;
    },
    enabled: !!jwt && !!id,
  });

  return {
    id: data?.id || '',
    email: data?.email || '',
    firstname: data?.firstname || '',
    lastname: data?.lastname || '',
    dni: data?.dni || '',
    phone: data?.phone || '',
    ...rest,
  };
};
