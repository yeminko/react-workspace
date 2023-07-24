import { TodoModel } from 'src/app/models/todo.model';
import styles from './todo.module.scss';

/* eslint-disable-next-line */
export interface TodoProps {
  todoModel: TodoModel;
}

export function Todo(props: TodoProps) {
  const todoModel = props.todoModel;
  return (
    <div className={styles.container}>
      <h3>{todoModel.name}</h3>
      <p>{todoModel.description}</p>
    </div>
  );
}

export default Todo;
