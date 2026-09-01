import { useReducer } from "react";

type Action = {
  type: "UPDATE_STATUS";
  payload: string;
};

function statusReducer(state: string, action: Action): string {
  switch (action.type) {
    case "UPDATE_STATUS":
      return action.payload;
    default:
      return state;
  }
}

const initialStatus = "Loading";

export default function Server() {
  const [status, dispatch] = useReducer(statusReducer, initialStatus);

  return (
    <>
      <h1>Server Status: {status}</h1>
      <button
        onClick={() => dispatch({ type: "UPDATE_STATUS", payload: "Online" })}
      >
        Online
      </button>
      <button
        onClick={() => dispatch({ type: "UPDATE_STATUS", payload: "Offline" })}
      >
        Offline
      </button>
      <button
        onClick={() => dispatch({ type: "UPDATE_STATUS", payload: "Loading" })}
      >
        Loading
      </button>
    </>
  );
}
