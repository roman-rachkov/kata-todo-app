import React, { useState, watch } from "react";
import ToggleCheckbox from "./UI/ToggleCheckbox.jsx";
import Input from "./UI/input.jsx";

const Task = ({ task, update, remove }) => {
  const [editing, setEditing] = useState(false);
  const [currentTask, setTask] = useState(task);

  const updateTask = () => {
    setEditing(false);
    update(currentTask);
  };

  const classes = [task.completed ? "completed" : "", editing ? "editing" : ""];

  return (
    <li className={classes.join(" ")}>
      <div className="view">
        <ToggleCheckbox
          checked={task.completed}
          onChange={(event) => {
            setTask({
              ...currentTask,
              completed: event.target.checked,
            });
            updateTask();
          }}
        />
        <label>
          <span className="description">{task.description}</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => setEditing(true)}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => remove(task.id)}
        ></button>
      </div>
      {editing ? (
        <form action="#" method="POST" onSubmit={updateTask}>
          <Input
            type="text"
            className="edit"
            placeholder="Editing task"
            value={currentTask.description}
            onChange={(event) =>
              setTask({ ...currentTask, description: event.target.value })
            }
          />
        </form>
      ) : (
        ""
      )}
    </li>
  );
};

export default Task;
