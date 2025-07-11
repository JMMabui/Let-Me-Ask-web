import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateRooms } from './pages/create-rooms';
import { Room } from './pages/rooms';
import { RecordRoomAudio } from './pages/record-room-audio';

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRooms />} index />
          <Route element={<Room />} path="/room/:roomId" />
          <Route element={<RecordRoomAudio/>} path='/room/:roomId/audio'/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
