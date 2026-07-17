import { useEffect, useState } from "react";

async function fetchRandomMessageCount(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomMessageCount = Math.floor(Math.random() * 100);
      resolve(randomMessageCount);
    }, 1000);
  });
}

export default function MessageCount() {
  const [messageCount, setMessageCount] = useState<number>(0);

  useEffect(() => {
    fetchRandomMessageCount().then((randomMessageCount) => {
      console.log("Fetched random message count:", randomMessageCount);
      setMessageCount(randomMessageCount);
    });
  }, []);

  return <h1>Message Count: {messageCount}</h1>;
}
