import { ChangeEvent, useState } from 'react';
import styles from './email-input.module.scss';

/* eslint-disable-next-line */
export interface EmailInputProps {}

export function EmailInput(props: EmailInputProps) {
  const [errorMessage, setErrorMessage] = useState('');

  function evaluateEmail(event: ChangeEvent<HTMLInputElement>) {
    console.log(event);

    const enteredEmail = event.target.value;

    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      setErrorMessage('The entered email address is invalid');
    } else {
      setErrorMessage('');
    }
  }

  return (
    <div>
      <input placeholder="Your email" type="email" onBlur={evaluateEmail} />
      <p>{errorMessage}</p>
    </div>
  );
}

export default EmailInput;
