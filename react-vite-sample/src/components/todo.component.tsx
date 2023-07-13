import { Todo } from "../models/todo.model";

type TodoProps = {
  todo: Todo;
};

export function TodoComponent(props: TodoProps) {
  const todo = props.todo;
  return (
    <>
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
    </>
  );
}
