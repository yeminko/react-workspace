import { useEffect, useRef } from "react";

interface Props {
  roomId: string;
  nightTheme: boolean;
}

export default function Chatroom({ roomId, nightTheme }: Props) {
  const darkThemeRef = useRef(nightTheme);
  darkThemeRef.current = nightTheme;

  useEffect(() => {
    if (darkThemeRef.current) {
      alert(`Good night from room ${roomId}`);
    } else {
      alert(`Good day from room ${roomId}.`);
    }
  }, [roomId]);

  return <div>You are in room {roomId}</div>;
}
