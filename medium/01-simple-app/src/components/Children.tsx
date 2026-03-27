interface Props {
  username: string;
}

export default function Children({ username }: Props) {
  return <h1>{username}</h1>;
}
