# React the complete guide - Udemy

## Summary

This note is based on the course [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) by Maximilian Schwarzmüller on Udemy.

## Video 43: Image Import

- Don't use static path for image in React
- Use `import` to import image.
- For example:

```javascript
import logo from "./logo.svg";

const App = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
    </div>
  );
};
```

## Video 45: Sperad/Destructure in Component Props

- Use spread operator to pass all props to a component.
- Use destructuring to get props in a component.
- For example:

```javascript
// App component
const user = {
  name: "Max",
  age: 28,
};
<User {...user} />;

// User component
const User = ({ name, age }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};
```
