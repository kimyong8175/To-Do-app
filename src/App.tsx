import { GlobalStyle } from "./GlobalStyle";
import ToDoListPage from "./pages/ToDoListPage";
import ToDoHead from "./components/ToDoHead";
import ToDoList from "./components/ToDoList";
import CreateToDo from "./components/CreateToDo";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoListPage>
        <ToDoHead />
        <ToDoList />
        <CreateToDo />
      </ToDoListPage>
    </>
  );
}

export default App;
