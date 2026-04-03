import type { ReactNode } from "react";

interface Props {
  username: string;
  children: ReactNode; // Define the type for children
}

export default function Child({ username, children }: Props) {
  return (
    <>
      <h1>{username}</h1>
      {/* Render the children */}
      <div>{children}</div>
    </>
  );
}
