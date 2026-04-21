import { useState } from "react";

interface Props {
  status: string;
}

export default function Child({ status }: Props) {
  const [childStatus, setChildStatus] = useState(status);

  return <h2>Child Component Status: {childStatus}</h2>;
}
