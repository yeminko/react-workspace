import { useState } from "react";

interface Props {
  recipient: string;
}

export default function MessageForm({ recipient }: Props) {
  const [message, setMessage] = useState("");

  return (
    <section>
      <h2>Message to {recipient}</h2>
      <label>Your message</label>
      <br />
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        rows={4}
      />
    </section>
  );
}
