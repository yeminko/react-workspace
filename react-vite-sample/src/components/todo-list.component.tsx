import Todo from "../models/todo.model";
import TodoComponent from "./todo.component";

export default function TodoListComponent() {
  const todoList: Todo[] = [
    new Todo(
      1,
      "To read a book",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,"
    ),
    new Todo(
      2,
      "To read a book",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,"
    ),
    new Todo(
      3,
      "To read a book",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,"
    ),
    new Todo(
      4,
      "To read a book",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,"
    ),
    new Todo(
      5,
      "To read a book",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,"
    ),
    new Todo(
      6,
      "To read a book",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,"
    ),
    new Todo(
      7,
      "To read a book",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,"
    ),
    new Todo(
      8,
      "To read a book",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,"
    ),
  ];

  return todoList.map((todo: Todo) => (
    <ul key={todo.id}>
      <li>
        <TodoComponent {...todo} />
      </li>
    </ul>
  ));
}
