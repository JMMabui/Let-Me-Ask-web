import { useRoomQuestions } from '@/http/use-room-questions';
import { QuestionItem } from './question-item';

interface QuestionsListProps {
  roomId: string;
}

export function QuestionList(props: QuestionsListProps) {
  const { data } = useRoomQuestions(props.roomId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>

      {data?.map((item) => {
        return <QuestionItem key={item.id} question={item} />;
      })}
    </div>
  );
}
