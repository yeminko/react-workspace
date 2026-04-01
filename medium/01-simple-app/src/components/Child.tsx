import type { ReactNode } from "react";

interface Props {
  username: string;
  children: ReactNode;
}

export default function Child({ username, children }: Props) {
  return (
    <>
      <h1>{username}</h1>
      <div>{children}</div>
    </>
  );
}
