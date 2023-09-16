import { useState } from "react";
import { useToDo } from "../Context/ToDoContext";
function ToDoForm() {
  const [input, setInput] = useState("");
  const { onAddTask } = useToDo();

  function handleSubmit(e) {
    e.preventDefault();
    if (!input) {
      return;
    }
    const newTask = {
      text: input,
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      isEdited: false,
    };
    onAddTask(newTask);
    setInput("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Task"
        className="search"
      />
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ToDoForm;
