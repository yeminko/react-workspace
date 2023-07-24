import { TodoModel } from 'src/app/models/todo.model';
import styles from './todo-list.module.scss';
import Todo from '../todo/todo';

/* eslint-disable-next-line */
export interface TodoListProps {}

export function TodoList(props: TodoListProps) {
  const todoModelList: TodoModel[] = [
    new TodoModel(
      1,
      'To read a book',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,'
    ),
    new TodoModel(
      2,
      'To read a book',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,'
    ),
    new TodoModel(
      3,
      'To read a book',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,'
    ),
    new TodoModel(
      4,
      'To read a book',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,'
    ),
    new TodoModel(
      5,
      'To read a book',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,'
    ),
    new TodoModel(
      6,
      'To read a book',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,'
    ),
    new TodoModel(
      7,
      'To read a book',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,'
    ),
    new TodoModel(
      8,
      'To read a book',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia nulla est,'
    ),
  ];

  return todoModelList.map((todoModel: TodoModel) => (
    <ul key={todoModel.id}>
      <li className={styles.bullet}>
        <Todo todoModel={todoModel}></Todo>
      </li>
    </ul>
  ));
}

export default TodoList;
