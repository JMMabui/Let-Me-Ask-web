import { useQuery } from '@tanstack/react-query';
import { env } from '@/env';
import type { getRoomQuestionsResponse } from './types/get-room-questions-response';

const baseURL = env.VITE_API_URL;

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      const response = await fetch(`${baseURL}/room/${roomId}/questions`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result: getRoomQuestionsResponse = await response.json();
      if (!result) {
        throw new Error('No result found');
      }
      return result;
    },
  });
}
