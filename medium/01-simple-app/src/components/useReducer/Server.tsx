import { useState } from "react";

export default function Server() {
  const [status, setStatus] = useState<string>("Loading");

  function changeToOnline() {
    setStatus("Online");
  }

  function changeToOffline() {
    setStatus("Offline");
  }

  function changeToLoading() {
    setStatus("Loading");
  }

  return (
    <>
      <h1>Server Status: {status}</h1>
      <button onClick={changeToOnline}>Online</button>
      <button onClick={changeToOffline}>Offline</button>
      <button onClick={changeToLoading}>Loading</button>
    </>
  );
}
