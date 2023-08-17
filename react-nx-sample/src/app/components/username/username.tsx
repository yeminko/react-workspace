import { KeyboardEvent, useState } from 'react';

/* eslint-disable-next-line */
export interface UsernameProps {}

export function Username(props: UsernameProps) {
  const [username, setUsername] = useState('hllo');

  function usernameHandler(event: KeyboardEvent<HTMLInputElement>) {
    setUsername((event.target as HTMLInputElement).value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        onKeyUp={usernameHandler}
      />
      <p>Your name is : {username}</p>
    </>
  );
}

export default Username;
