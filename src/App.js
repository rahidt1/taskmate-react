import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

import "./App.css";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([
    { id: 10001, name: "Task A", time: "2:09:01 AM 9/14/2023" },
    { id: 10001, name: "Task B", time: "2:09:01 AM 9/14/2023" },
    { id: 10001, name: "Task C", time: "2:09:01 AM 9/14/2023" },
  ]);

  return (
    <div className="App">
      <Header />
      <AddTask />
      <ShowTask taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
