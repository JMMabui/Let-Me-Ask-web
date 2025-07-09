
import { useParams, Navigate } from "react-router-dom";

type RoomParams = {
  roomId: string;   
}

export function Rooms() {

    const parms = useParams<RoomParams>();
    if (!parms.roomId) {
        return <Navigate to="/" replace />;
    }
  return (
    <div>
      <h1>Room {JSON.stringify(parms)} Details </h1>
      <p>This is the Rooms page.</p>
    </div>
  );
}