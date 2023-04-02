import React, { useState } from "react";
import ToggleCheckbox from "./UI/ToggleCheckbox.jsx";
import Input from "./UI/input.jsx";
import IconButton from "./UI/icon-button.jsx";
import { formatDistanceToNow } from "date-fns";

const Task = ({ task, update, remove }) => {
  const [editing, setEditing] = useState(false);
  const [taskDescription, setDescription] = useState(task.description);

  const updateTask = () => {
    setEditing(false);
    update({ ...task, description: taskDescription });
  };

  const handleCompleted = (event) => {
    update({ ...task, completed: event.target.checked });
  };

  const classes = [task.completed ? "completed" : "", editing ? "editing" : ""];

  return (
    <li className={classes.join(" ")}>
      <div className="view">
        <ToggleCheckbox checked={task.completed} onChange={handleCompleted} />
        <label>
          <span className="description">{task.description}</span>
          <span className="created">
            created{" "}
            {formatDistanceToNow(task.created, { includeSeconds: true })}
          </span>
        </label>
        <IconButton
          icon="icon-edit"
          onClick={() => setEditing(true)}
        ></IconButton>
        <IconButton
          icon="icon-destroy"
          onClick={() => remove(task.id)}
        ></IconButton>
      </div>
      {editing ? (
        <form action="#" method="POST" onSubmit={updateTask}>
          <Input
            type="text"
            className="edit"
            placeholder="Editing task"
            value={taskDescription}
            onChange={(event) => setDescription(event.target.value)}
          />
        </form>
      ) : (
        ""
      )}
    </li>
  );
};

export default Task;
