import { useState, useEffect } from "react";

interface Props {
  status: string;
}

export default function Child({ status }: Props) {
  const [childStatus, setChildStatus] = useState(status);

  // useEffect(() => {
  //   setChildStatus(status);
  // }, [status]);

  return <h2>Child Component Status: {childStatus}</h2>;
}
