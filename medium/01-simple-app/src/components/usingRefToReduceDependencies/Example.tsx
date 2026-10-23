import { useState } from "react";
import Chatroom from "./Chatroom";

export default function Example() {
  const [roomId, setRoomId] = useState("1");
  const [nightTheme, setNightTheme] = useState(false);

  return (
    <>
      <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
        <option value="1">Room 1</option>
        <option value="2">Room 2</option>
        <option value="3">Room 3</option>
      </select>
      <br />
      <label>Dark Theme: </label>
      <input
        type="checkbox"
        checked={nightTheme}
        onChange={(e) => setNightTheme(e.target.checked)}
      />
      <Chatroom roomId={roomId} nightTheme={nightTheme} />
    </>
  );
}
