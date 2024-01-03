export function AddTask({ singleTask, setSingleTask, onSubmit }) {
  return (
    <section className="addTask">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={singleTask.name || ""}
          onChange={(e) =>
            setSingleTask({ ...singleTask, name: e.target.value })
          }
          name="task"
          placeholder="add task"
          maxLength={25}
          autoComplete="off"
        />
        <button type="submit">{singleTask.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
}
