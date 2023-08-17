import EmailInput2 from './components/email-input-2/email-input-2';
import EmailInput from './components/email-input/email-input';
import LoginForm2 from './components/login-form-2/login-form-2';
import LoginForm from './components/login-form/login-form';

export function App() {
  return (
    <div>
      <h1>Simple useState()</h1>
      <EmailInput />

      <h1>Using two state slices</h1>
      <LoginForm />

      <h1>Managing Combined State Objects with Two-way data binding</h1>
      <LoginForm2 />

      <h2>Deriving Values from State</h2>
      <EmailInput2 />
    </div>
  );
}

export default App;
