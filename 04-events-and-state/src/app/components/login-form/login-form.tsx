import { ChangeEvent, useState } from 'react';

/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  function emailEnteredHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredEmail(event.target.value);
  }

  function passwordEnteredHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredPassword(event.target.value);
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Your email"
          onBlur={emailEnteredHandler}
        />
        <input
          type="password"
          placeholder="Your password"
          onBlur={passwordEnteredHandler}
        />
      </form>
      <p>Your Email: {enteredEmail}</p>
      <p>Your password: {enteredPassword}</p>
    </>
  );
}

export default LoginForm;
