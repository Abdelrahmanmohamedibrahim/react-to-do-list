import { useState } from "react";
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
    <div className="to-do-item">
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

export default ToDoItem;
