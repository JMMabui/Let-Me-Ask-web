import { useQuery } from '@tanstack/react-query';
import { env } from '@/env';
import type { getRoomsResponse } from './types/get-rooms-response';

const baseURL = env.VITE_API_URL;

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch(`${baseURL}/rooms`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result: getRoomsResponse = await response.json();
      if (!result) {
        throw new Error('No result found');
      }
      return result;
    },
  });
}
