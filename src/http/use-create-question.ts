import { useMutation, useQueryClient } from '@tanstack/react-query';
import { env } from '@/env';
import type { CreateQuestionRequest } from './types/create-question-request';
import type { CreateQuestionResponse } from './types/create-question-response';
import type { getRoomQuestionsResponse } from './types/get-room-questions-response';

const baseURL = env.VITE_API_URL;

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(`${baseURL}/room/${roomId}/question`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: CreateQuestionResponse = await response.json();

      return result;
    },

    onMutate({ question }) {
      const questions = queryClient.getQueryData<getRoomQuestionsResponse>([
        'get-questions',
        roomId,
      ]);

      const questionsArray = questions ?? [];

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      };

      queryClient.setQueryData<getRoomQuestionsResponse>(
        ['get-questions', roomId],
        [newQuestion, ...questionsArray]
      );

      return { newQuestion, questions };
    },

    onSuccess(data, _variables, context) {
      queryClient.setQueryData<getRoomQuestionsResponse>(
        ['get-questions', roomId],
        (questions) => {
          if (!questions) {
            return questions;
          }
          if (!context?.newQuestion) {
            return questions;
          }
          return questions.map((question) => {
            if (question.id === context.newQuestion.id) {
              return {
                ...context.newQuestion,
                id: data.questionId,
                answer: data.answer,
                isGeneratingAnswer: false,
              };
            }
            return question;
          });
        }
      );
    },

    onError(_error, _variables, context) {
      if (context?.questions) {
        queryClient.setQueryData<getRoomQuestionsResponse>(
          ['get-questions', roomId],
          context.questions
        );
      }
    },
  });
}
