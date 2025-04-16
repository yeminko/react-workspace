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

## Video 45: Spread/Destructure in Component Props

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

- You can let them use whatever HTML element they want.
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
function incrementCounter() {
  setCounter((prevCounter) => prevCounter + 1);
}
```

## Video 81: Update Obj/Array State Immutably \*\*\*

- If you want to update an object or an array in the state, use the spread operator to create new ones.
- This make ensured that the state isn't mutated before React re-renders schedule.

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

## Video 93: Nested Array Deep Copy

```javascript
const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
];

const newArray = [...nestedArray.map((arr) => [...arr])];
```

## Video 94: Making Object Key as Variable

```javascript
function createObj(key, value) {
  return {
    [key]: value,
  };
}
```

## Video 111: Use ternary operator in dynamic class

```javascript
className={emailNotValid ? 'invalid' : undefined}
```

## Video 139: Using Refs (`useRef()`) \*\*\*

- Use refs when you need to manage DOM directly.
- Use refs when you need to maintain a value that persists across renders without causing re-renders. (Regular variables are reset when `useState()` is called.)

## Video 142: `useImperativeHandle()`

- Use it when you need to customize `ref` instance of the component.

## Video 147: Portals

- Use portals to teleport a component to a different part of the DOM tree.

## Video 168,169: Using React Context

In Version 19,

- Wrapping context: `<CartContext></CartContext>`
- Consuming context: `const cartCtx = use(CartContext)`

In Earlier Version,

- Wrapping context: `<CartContext.Provider></CartContext.Provider>`
- Consuming context: `const cartCtx = useContext(CartContext)`

Remember,

- `useContext()` can only be written at the top level of the component. `use()` can write inside if condition.

## Video 175: Using `useReducer()`

- When using `useReducer()`, you need to pass a reducer function and an initial state.
- The reducer function should be declared outside the component because it doesn't need to be re-created on every render.

## Video 188: useEffect's Cleanup Function

- Cleanup function run right before `useEffect` function run again.
- Also run right before the component is dismount.

## Video 189: Becareful with useEffect

- If you use obj, function, or array as dependency, it can cause infinite loop.

## Video 190: useCallback

- Memoizes a function to keep its reference stable.
- Prevents unnecessary child re-renders when passing functions as props.
- Only re-creates the function if dependencies change.
- Mostly used with `useEffect`

## Video 199: Auto unmount component with `key` prop

- Use `key` prop to force React to unmount and remount a component.
- If the `key` changes, React will unmount the component and remount it.
- This is useful when you want to reset the state of a component.
