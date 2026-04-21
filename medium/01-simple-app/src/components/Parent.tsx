import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [status, setStatus] = useState("offline");

  function toggleStatus() {
    setStatus((prevStatus) =>
      prevStatus === "offline" ? "online" : "offline",
    );
  }

  return (
    <>
      <h1>Parent Component Status: {status}</h1>
      <Child status={status} />
      <button onClick={toggleStatus}>Change Status</button>
    </>
  );
}
