// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Header from './components/header/header';
import TodoList from './components/todo-list/todo-list';

export function App() {
  return (
    <div>
      <Header>Welcome from React + Nx Project</Header>
      <TodoList />
    </div>
  );
}

export default App;
