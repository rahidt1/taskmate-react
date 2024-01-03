import { useState } from "react";

import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([
    { id: 10001, name: "Task A", time: "2:09:01 AM 9/14/2023" },
    { id: 10002, name: "Task B", time: "2:09:01 AM 9/14/2023" },
    { id: 10003, name: "Task C", time: "2:09:01 AM 9/14/2023" },
  ]);

  // Add Task
  function handleAddTask(newTask) {
    setTaskList((tasks) => [...tasks, newTask]);
  }

  // Delete Task
  function handleDelete(id) {
    setTaskList((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <AddTask onAddTask={handleAddTask} />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
