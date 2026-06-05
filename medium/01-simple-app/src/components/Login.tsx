import { useRef, useState } from "react";

export default function Login() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState("");

  function handleReset() {
    if (usernameRef.current) usernameRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
    setData("");
  }

  function handleLogin() {
    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    setData(`Username: ${username}, Password: ${password}`);
  }

  return (
    <>
      <h2>Login</h2>
      <input type="text" ref={usernameRef} />
      <br />

      <input type="password" ref={passwordRef} />
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
