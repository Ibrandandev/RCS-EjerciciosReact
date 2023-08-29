import "../css/tasklist.css";

const TaskList = ({ tasks }) => {
  return (
    <section>
      {tasks.map((task, i) => (
        <article className="task-container" key={i}>
          <p>{task}</p>
          <button className="btn">X</button>
        </article>
      ))}
    </section>
  );
};

export default TaskList;
