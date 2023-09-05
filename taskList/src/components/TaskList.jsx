import "../css/tasklist.css";

const TaskList = ({ tasks, setTasks }) => {
  const deleteTask = (idToDelete) => {
    const filteredTasks = tasks.filter((task) => task.id != idToDelete);
    setTasks(filteredTasks);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  };

  // const tasksFromStorage = localStorage.getItem("tasks");

  return (
    <section>
      {tasks.map((task) => (
        <article className="task-container" key={task.id}>
          <p>{task.name}</p>
          <button className="btn" onClick={() => deleteTask(task.id)}>
            X
          </button>
        </article>
      ))}
    </section>
  );
};

export default TaskList;
