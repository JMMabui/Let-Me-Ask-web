import { useQuery } from "@tanstack/react-query";
import {Link} from "react-router-dom"

type getRoomsResponse = Array<{
    id: string;
    name: string;
    description: string;
    createdAt: string;
}>

export function CreateRooms() {
    const {data, isLoading } = useQuery({
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
        }
        
    })

  return (
    <div>
        <h1>Create Rooms</h1>

        {isLoading && <p>Loading rooms...</p>}
        <div className="flex flex-col gap-2">
            {data?.map(room => {
                return <Link to={`/rooms/${room.id}`} key={room.id}>{room.name}</Link>
            })}
            
        </div>
            
       
    </div>
  );
}