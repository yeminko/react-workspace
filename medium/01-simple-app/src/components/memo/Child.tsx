import { memo } from "react";

interface Props {
  print: (text: string) => void;
}

export default memo(function Child({ print }: Props) {
  console.log("Child rendered");

  return <button onClick={() => print("Hello!")}>Print Hello!</button>;
});
