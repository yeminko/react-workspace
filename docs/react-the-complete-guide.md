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

## Video 56: Use && for Conditional Rendering

- Use `&&` for conditional rendering.
- For example:

```javascript
const App = () => {
  const showParagraph = true;

  return <div>{showParagraph && <p>This is a paragraph</p>}</div>;
};
```

## Video 62: Using Fragments

- Use `<>` and `</>` to wrap multiple elements in a component.

## Video 66: Forwarding all props into rest parameter \*\*\*

- Use `...CUSTOM_NAME` to forward all props into a component. For example

```javascript
const MyComponent = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
```

## Video 67: Multiple JSX Slots \*\*\*

- You can pass JSX elements as attributes to a component.

```javascript
const Tabs = ({ children, buttons }) => {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
};

const App = () => {
  return (
    <Tabs
      buttons={
        <>
          <button>Tab 1</button>
          <button>Tab 2</button>
        </>
      }
    >
      <p>Content</p>
    </Tabs>
  );
};
```

## Video 68: Dynamic component types \*\*\*

- You can let them to use whatever HTML element they want.
- Just remember to declare the variable name as Capital letter. (Because if you use lowercase, React will think it's a default HTML element)

```javascript
const MyComponent = ({ YourElement }) => {
  return <YourElement>Content</YourElement>;
};

const App = () => {
  return <MyComponent YourElement="h1" />;
};
```

## Video 72: Public Folder vs Assets Folder

- Use the `public` folder if it will be used in `index.html`.
- Use the `src/assets` folder if it will be used in React components.

## Video 78: Use function to update old state \*\*\*

- If you want to update the state based on the old state, use a function to update it.

```javascript
const [counter, setCounter] = useState(0);
const incrementCounter = () => {
  setCounter((prevCounter) => prevCounter + 1);
};
```

## Video 81: Update Obj/Array State Immutably \*\*\*

- If you want to update an object or an array in the state, use the spread operator to create new ones.
- This make ensure that the state isn't mutated before React re-renders schedule.

```javascript
const [user, setUser] = useState({ name: "Max", age: 28 });
const updateUser = () => {
  setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
};
```

## Video 84: Be careful merging different states \*\*\*

- State updates are asynchronous.
- If you want to get a state inside another state, make sure you get the latest state.

```javascript
const [user, setUser] = useState({ name: "Max", age: 28 });
const [log, setLog] = useState([]);
const updateUser = () => {
  setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
  setLog((prevLog) => [...prevLog, `User age changed to ${user.age}`]);
};
```
