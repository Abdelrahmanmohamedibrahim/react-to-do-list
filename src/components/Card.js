import { useState } from "react";
import Title from "./Title";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

function Card() {
  return (
    <div className="card">
      <Title />
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default Card;
