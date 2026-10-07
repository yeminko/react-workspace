import { useState } from "react";
import MessageForm from "./MessageForm";

const recipients = ["Alice", "Bob"];

export default function Messenger() {
  const [recipient, setRecipient] = useState(recipients[0]);

  return (
    <main>
      {recipients.map((name) => (
        <button key={name} onClick={() => setRecipient(name)}>
          {name}
        </button>
      ))}

      <MessageForm key={recipient} recipient={recipient} />
    </main>
  );
}
