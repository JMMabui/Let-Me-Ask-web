import { useQuery } from '@tanstack/react-query';
import type { getRoomsResponse } from './types/get-rooms-response';

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms');
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
