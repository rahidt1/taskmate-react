import { useState } from "react";
import { isWhiteSpaceString } from "../utils/utils";

export function AddTask({ onAddTask }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || isWhiteSpaceString(name)) return;

    const date = new Date();

    const newTask = {
      id: date.getTime(),
      name: name,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };

    onAddTask(newTask);

    setName(""); //Clear input field
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="task"
          placeholder="add task"
          maxLength={25}
          autoComplete="off"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}
