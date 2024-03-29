export function ShowTask({ taskList, setTaskList, onDelete, onEdit }) {
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Taskmate</span>
          <span className="count">{taskList.length}</span>
        </div>

        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>

      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => onEdit(task.id)}
            ></i>
            <i className="bi bi-trash" onClick={() => onDelete(task.id)}></i>
          </li>
        ))}
      </ul>
    </section>
  );
}
