import { useReducer } from "react";

type Status = "Loading" | "Online" | "Offline";

type Action =
  | { type: "CHANGE_TO_ONLINE" }
  | { type: "CHANGE_TO_OFFLINE" }
  | { type: "CHANGE_TO_LOADING" };

function statusReducer(state: Status, action: Action): Status {
  switch (action.type) {
    case "CHANGE_TO_ONLINE":
      return "Online";
    case "CHANGE_TO_OFFLINE":
      return "Offline";
    case "CHANGE_TO_LOADING":
      return "Loading";
    default:
      return state;
  }
}

const initialStatus: Status = "Loading";

export default function Server() {
  const [status, dispatch] = useReducer(statusReducer, initialStatus);

  return (
    <>
      <h1>Server Status: {status}</h1>
      <button onClick={() => dispatch({ type: "CHANGE_TO_ONLINE" })}>
        Online
      </button>
      <button onClick={() => dispatch({ type: "CHANGE_TO_OFFLINE" })}>
        Offline
      </button>
      <button onClick={() => dispatch({ type: "CHANGE_TO_LOADING" })}>
        Loading
      </button>
    </>
  );
}
