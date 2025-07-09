import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRooms } from "./pages/create-rooms";
import { Rooms } from "./pages/rooms";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'



export function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route  element={<CreateRooms /> } index/>
          <Route element= {<Rooms />}  path="/rooms/:roomId"/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}


