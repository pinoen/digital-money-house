import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://digitalmoney.digitalhouse.com/api';

export const useCreateDeposit = (accountId, jwt) => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: data => {
      return axios.post(`${API_URL}/accounts/${accountId}/deposits`, data, {
        headers: {
          Authorization: jwt,
        },
      });
    },
    onSuccess: () => {
      console.log('Deposit created successfully');
      toast.success('Deposito creado correctamente');
      queryClient.invalidateQueries([
        'deposits',
        'account',
        'activity',
        'cards',
        'user',
      ]);
    },
    onError: error => {
      console.error('Error creating deposit:', error.message);
      toast.error(error.message);
    },
  });

  return { mutate, ...rest };
};
