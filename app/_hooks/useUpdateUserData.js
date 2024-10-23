import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://digitalmoney.digitalhouse.com/api';

export const useUpdateUserData = (userId, jwt) => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: async (data) => {
      const response = await axios.patch(`${API_URL}/users/${userId}`, data, {
        headers: {
          Authorization: jwt,
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      console.log('User data updated successfully:', data);
      toast.success('Información actualizada correctamente');
      queryClient.invalidateQueries(['user']);
    },
    onError: error => {
      console.error('Error updating user data:', error);
      toast.error(error.message);
    },
  });

  return { mutate, ...rest };
};