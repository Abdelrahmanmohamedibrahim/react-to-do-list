import { useState } from "react";
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

export default EditItem;
