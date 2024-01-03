import { useState } from "react";

import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

import "./App.css";
import { isWhiteSpaceString } from "./utils/utils";

function App() {
  const [taskList, setTaskList] = useState([
    { id: 10001, name: "Task A", time: "2:09:01 AM 9/14/2023" },
    { id: 10002, name: "Task B", time: "2:09:01 AM 9/14/2023" },
    { id: 10003, name: "Task C", time: "2:09:01 AM 9/14/2023" },
  ]);

  const [singleTask, setSingleTask] = useState({});

  // Add Task
  function handleAddTask(newTask) {
    setTaskList((tasks) => [...tasks, newTask]);
  }

  // Delete Task
  function handleDelete(id) {
    setTaskList((tasks) => tasks.filter((task) => task.id !== id));
  }

  // Edit Task
  function handleEdit(id) {
    const selectedTask = taskList.find((t) => t.id === id);
    setSingleTask(selectedTask);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // If singleTask has any task, that means we clicked edit button
    if (singleTask.id) {
      const date = new Date();
      const updatedTask = taskList.map((task) =>
        task.id === singleTask.id
          ? {
              id: date.getTime(),
              name: singleTask.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : task
      );

      if (!singleTask.name || isWhiteSpaceString(singleTask.name)) return;

      setTaskList(updatedTask);
      setSingleTask({});
    } else {
      const date = new Date();

      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      if (!newTask.name || isWhiteSpaceString(newTask.name)) return;

      handleAddTask(newTask);
      setSingleTask({});
    }
  }

  return (
    <div className="App">
      <Header />
      <AddTask
        singleTask={singleTask}
        setSingleTask={setSingleTask}
        onSubmit={handleSubmit}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
