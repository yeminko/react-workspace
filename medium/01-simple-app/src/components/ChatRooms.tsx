import { useEffect, useState } from "react";
import styles from "./ChatRooms.module.css";

interface ChatRoom {
  id: number;
  name: string;
}

const chatRooms: ChatRoom[] = [
  { id: 1, name: "General" },
  { id: 2, name: "Technology" },
  { id: 3, name: "Gaming" },
];

function getChatRoomsById(id: number): Promise<ChatRoom | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const room = chatRooms.find((room) => room.id === id);
      resolve(room);
    }, 3000);
  });
}

export default function ChatRooms() {
  const [currentRoom, setCurrentRoom] = useState<ChatRoom | undefined>(
    undefined,
  );

  async function handleRoomClick(roomId: number) {
    const room = await getChatRoomsById(roomId);
    setCurrentRoom(room);
  }

  useEffect(() => {
    const fetchRoom = async () => {
      const room = await getChatRoomsById(1);
      setCurrentRoom(room);
    };

    fetchRoom();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Chat Rooms</h1>
      <div className={styles.chatRooms}>
        {/* Rooms */}
        <section>
          {chatRooms.map((room) => (
            <div
              key={room.id}
              className={styles.chatRoom}
              onClick={() => handleRoomClick(room.id)}
            >
              {room.name}
            </div>
          ))}
        </section>
        <section>
          {currentRoom ? (
            <div className={styles["current-room"]}>
              <span>Current Room: {currentRoom.name}</span>
            </div>
          ) : (
            <p>Loading current room...</p>
          )}
        </section>
      </div>
    </div>
  );
}
