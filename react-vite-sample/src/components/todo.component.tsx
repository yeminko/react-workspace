import Todo from "../models/todo.model";

export default function TodoComponent(todo: Todo) {
  return (
    <>
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
    </>
  );
}
