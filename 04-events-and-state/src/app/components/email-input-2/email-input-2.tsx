import { ChangeEvent, useState } from 'react';
/* eslint-disable-next-line */
export interface EmailInput2Props {}

export function EmailInput2(props: EmailInput2Props) {
  const [enteredEmail, setEnteredEmail] = useState('');

  function enteredEmailHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredEmail(event.target.value);
  }

  const numChars = enteredEmail.length;

  return (
    <>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={enteredEmailHandler}
      />
      <p>Characters entered: {numChars}</p>
    </>
  );
}

export default EmailInput2;
