import React from "react";
import UserList from "./components/UserList";
import TodoList from "./components/Todolist";

function App() {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
