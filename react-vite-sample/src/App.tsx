import "./App.css";
import HeaderComponent from "./components/header.component";
import TodoListComponent from "./components/todo-list.component";

function App() {
  return (
    <>
      <HeaderComponent title="Welcome from React + Typescript + Vite!" />
      <TodoListComponent />
    </>
  );
}

export default App;
