interface Props {
  status: string;
}

export default function Child({ status }: Props) {
  console.log("Child rendered");

  return <h1>Status: {status}</h1>;
}
