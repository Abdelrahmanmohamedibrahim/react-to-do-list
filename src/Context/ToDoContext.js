import { createContext, useContext } from "react";
import { useState } from "react";

const ToDoContext = createContext();
function ToDoProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  function displayEdit() {
    setIsEdited((isEdited) => !isEdited);
  }
  function editTask(id, newTask) {
    if (!newTask) return;
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newTask } : task))
    );
    setIsEdited((isEdited) => !isEdited);
  }

  function handleAddTasks(task) {
    setTasks([...tasks, task]);
  }
  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }
  return (
    <ToDoContext.Provider
      value={{
        tasks,
        isEdited,
        onEditing: displayEdit,
        onEditTask: editTask,
        onAddTask: handleAddTasks,
        onDeleteTask: handleDeleteTask,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
function useToDo() {
  const context = useContext(ToDoContext);
  if (context === undefined) {
    throw new Error("AuthContxt wasn't used");
  }
  return context;
}
export { useToDo, ToDoProvider };
