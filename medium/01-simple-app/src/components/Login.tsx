import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  function handleReset() {
    setUsername("");
    setPassword("");
    setData("");
  }

  function handleLogin() {
    setData(`Username: ${username}, Password: ${password}`);
  }

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </p>
      {data && <p>{data}</p>}
    </>
  );
}
