import { useToDo } from "../Context/ToDoContext";
import EditItem from "./EditItem";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const { tasks, onEditTask, onEditing, onDeleteTask } = useToDo();
  return (
    <div className="to-dos-list">
      {tasks.map((toDo) =>
        toDo.isEdited ? (
          <EditItem toDo={toDo} onEditTask={onEditTask} key={toDo.id} />
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

export default ToDoList;
