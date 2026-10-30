import { useEffect } from "react";

interface Props {
  roomId: string;
  nightTheme: boolean;
}

export default function Chatroom({ roomId, nightTheme }: Props) {
  useEffect(() => {
    if (nightTheme) {
      console.log(`Good night from room ${roomId}`);
    } else {
      console.log(`Good day from room ${roomId}.`);
    }
  }, [roomId, nightTheme]);

  return <div>You are in room {roomId}</div>;
}
