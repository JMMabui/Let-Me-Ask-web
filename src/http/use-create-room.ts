import { useMutation, useQueryClient } from '@tanstack/react-query';
import { env } from '@/env';
import type { CreateRoomsRequest } from './types/create-rooms-request';
import type { CreateRoomsResponse } from './types/create-rooms-response';

const baseURL = env.VITE_API_URL;

export function useCreateRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateRoomsRequest) => {
      const response = await fetch(`${baseURL}/rooms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: CreateRoomsResponse = await response.json();

      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-rooms'] });
    },
  });
}
