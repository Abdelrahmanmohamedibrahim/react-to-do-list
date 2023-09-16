import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoWrapper from "./components/TodoWrapper";
import { ToDoProvider } from "./Context/ToDoContext";

function App() {
  return (
    <>
      <ToDoProvider>
        <div className="App">
          <TodoWrapper />
        </div>
      </ToDoProvider>
    </>
  );
}

export default App;
