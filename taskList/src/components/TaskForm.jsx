import "../css/taskform.css";

class Task {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const TaskForm = ({ tasks, setTasks }) => {
  const tasksAux = [...tasks];

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newTask = document.querySelector("#new-task").value;
    const id = tasksAux.length > 0 ? tasksAux.at(-1).id + 1 : 1;
    if (newTask) {
      tasksAux.push(new Task(id, newTask));
      setTasks(tasksAux);
      localStorage.setItem("tasks", JSON.stringify(tasksAux));
      document.querySelector("#new-task").value = "";
    }
  };

  return (
    <>
      <form action="" className="form" onSubmit={handlerSubmit}>
        <div className="form-group">
          <label htmlFor="new-task" className="form-label">
            Ingresa tu Tarea
          </label>
          <input type="text" id="new-task" className="form-control" />
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
