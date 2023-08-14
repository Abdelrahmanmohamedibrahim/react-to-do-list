import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const intialToDos = [
  {
    text: "you have to build 3 projects",
    id: 0,
    isEdited: false,
  },
  {
    text: "you have to study",
    id: 1,
    isEdited: false,
  },
  {
    text: "you have to do exercise",
    id: 2,
    isEdited: false,
  },
];
function App() {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

function TodoWrapper() {
  return (
    <div className="wrapper">
      <Card />
    </div>
  );
}
function Card() {
  const [tasks, setTasks] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  function displayEdit() {
    setIsEdited((isEdited) => !isEdited);
  }
  function editTask(id, newTask) {
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
    console.log("deleted");
  }
  return (
    <div className="card">
      <Title />
      <ToDoForm onAddTask={handleAddTasks} />
      <ToDoList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditing={displayEdit}
        onEditTask={editTask}
      />
    </div>
  );
}
function Title() {
  return (
    <div className="title">
      <p>To-Do-list 📒</p>
    </div>
  );
}
function ToDoForm({ onAddTask }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
        placeholder="add task"
        className="search"
      />
      <button className="add-btn">Add</button>
    </form>
  );
}
function ToDoList({ tasks, onDeleteTask, onEditing, onEditTask }) {
  return (
    <div className="to-dos-list">
      {tasks.map((toDo) =>
        toDo.isEdited ? (
          <EditItem toDo={toDo} onEditTask={onEditTask} />
        ) : (
          <ToDoItem
            toDo={toDo}
            key={toDo.id}
            onDeleteTask={onDeleteTask}
            onEditing={onEditing}
          />
        )
      )}
    </div>
  );
}
function ToDoItem({ toDo, onDeleteTask, onEditing }) {
  const [isFinished, setIsFinished] = useState(false);

  function handleFinishTask() {
    setIsFinished((finished) => !finished);
  }
  function handleEditingButton() {
    onEditing();
    toDo.isEdited = !toDo.isEdited;
  }
  return (
    <div className="to-do-item" onClick={() => console.log(toDo)}>
      <input type="checkbox" onClick={handleFinishTask}></input>
      {!isFinished ? (
        <p>{toDo.text}</p>
      ) : (
        <p className="finished">{toDo.text}</p>
      )}

      <span className="features">
        <span onClick={() => onDeleteTask(toDo.id)}>❌</span>

        <span onClick={handleEditingButton}>✍️</span>
      </span>
    </div>
  );
}
function EditItem({ toDo, onEditTask }) {
  const [input, setInput] = useState("");
  function handleEdit(e) {
    e.preventDefault();
    toDo.isEdited = false;
    onEditTask(toDo.id, input);
  }
  return (
    <form className="add-form" onSubmit={handleEdit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={toDo.text}
        className="search"
      />
      <button className="add-btn">Edit</button>
    </form>
  );
}

export default App;
