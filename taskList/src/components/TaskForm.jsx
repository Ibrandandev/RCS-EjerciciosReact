import "../css/taskform.css";

const TaskForm = ({ tasks, setTasks }) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const newTask = document.querySelector("#new-task").value;
    if (newTask) {
      setTasks([...tasks, newTask]);
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
        </div>
      </form>
    </>
  );
};

export default TaskForm;
