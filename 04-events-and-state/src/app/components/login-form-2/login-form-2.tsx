import { ChangeEvent, useState } from 'react';

/* eslint-disable-next-line */
export interface LoginForm2Props {}

export function LoginForm2(props: LoginForm2Props) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  function emailEnteredHandler(event: ChangeEvent<HTMLInputElement>) {
    setUserData((prevData) => ({
      email: event.target.value,
      password: prevData.password,
    }));
  }

  function passwordEnteredHandler(event: ChangeEvent<HTMLInputElement>) {
    setUserData((prevData) => ({
      email: prevData.email,
      password: event.target.value,
    }));
  }

  function clearInputHandler() {
    setUserData({
      email: '',
      password: '',
    });
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Your email"
          value={userData.email}
          onBlur={emailEnteredHandler}
        />
        <input
          type="password"
          value={userData.password}
          placeholder="Your password"
          onBlur={passwordEnteredHandler}
        />
      </form>
      <p>Your Data: {JSON.stringify(userData)}</p>
      <button onClick={clearInputHandler}>Clear</button>
    </>
  );
}

export default LoginForm2;
