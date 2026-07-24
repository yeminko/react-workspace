import { useState, useEffect } from "react";

// Mock API that delays response by 5 seconds
function fetchRoomMessages(roomId: string): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        `Message 1 for ${roomId}`,
        `Message 2 for ${roomId}`,
        `Welcome to ${roomId}!`,
      ]);
    }, 5000);
  });
}

export function BuggyChatRoom() {
  const [roomId, setRoomId] = useState("General");
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setMessages([]);

    fetchRoomMessages(roomId).then((data) => {
      setMessages(data);
      setLoading(false);
    });
  }, [roomId]);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>Current Room: {roomId}</h2>

      <div style={{ gap: 10, display: "flex", marginBottom: 20 }}>
        <button onClick={() => setRoomId("General")}>General Room</button>
        <button onClick={() => setRoomId("Tech")}>Tech Room</button>
        <button onClick={() => setRoomId("Random")}>Random Room</button>
      </div>

      {loading ? (
        <p>
          <em>Loading messages for {roomId}... (5s delay)</em>
        </p>
      ) : (
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
