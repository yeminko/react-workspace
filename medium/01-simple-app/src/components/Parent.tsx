import Child from "./Child";

export default function Parent() {
  const username = "John Doe";

  return (
    <>
      <h1>Parent Component</h1>
      <Child username={username}>
        {/* Passing an element as children */}
        <p>Welcome</p>
      </Child>
    </>
  );
}
