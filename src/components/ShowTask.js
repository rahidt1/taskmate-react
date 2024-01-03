export function ShowTask({ taskList, setTaskList }) {
  function handleDelete(id) {
    setTaskList((tasks) => tasks.filter((task) => task.id !== id));
  }

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
            <i className="bi bi-pencil-square"></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(task.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
}
