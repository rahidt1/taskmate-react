import { useState } from "react";

export function AddTask({ setTaskList }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const date = new Date();

    const newTask = {
      id: date.getTime(),
      name: name,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };

    setTaskList((tasks) => [...tasks, newTask]); //Add new task

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
