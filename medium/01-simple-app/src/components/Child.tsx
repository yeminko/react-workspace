import { useEffect, useState } from "react";

interface Props {
  status: string;
}

export default function Child({ status }: Props) {
  return <h2>Child Component Status: {status}</h2>;
}
