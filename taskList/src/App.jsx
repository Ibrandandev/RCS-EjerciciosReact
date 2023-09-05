import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const tasksFromStorage = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(tasksFromStorage);

  return (
    <>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
