import { Input } from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      console.log("Form has errors, cannot submit.");
      return;
    }

    console.log("Login form submitted");
    console.log("enteredValues:", {
      email: emailValue,
      password: passwordValue,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          error={emailHasError && "Please enter a valid email address."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          error={
            passwordHasError && "Password must be at least 6 characters long."
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
