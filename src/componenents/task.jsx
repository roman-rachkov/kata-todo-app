import React, { useState } from "react";
import ToggleCheckbox from "./UI/ToggleCheckbox.jsx";
import Input from "./UI/input.jsx";
import IconButton from "./UI/icon-button.jsx";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

const Task = ({ task, updateTaskHandler, removeTaskHandler }) => {
  const [editing, setEditing] = useState(false);
  const [taskDescription, setDescription] = useState(task.description);

  const updateTask = () => {
    setEditing(false);
    updateTaskHandler({ ...task, description: taskDescription });
  };

  const handleCompleted = (event) => {
    updateTaskHandler({ ...task, completed: event.target.checked });
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
          onClick={() => removeTaskHandler(task.id)}
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

Task.propTypes = {
  task: PropTypes.objectOf(
    (propValue, propName, componentName, location, propFullName) => {
      if (!["id", "created", "completed", "description"].includes(propName)) {
        return new Error(
          `Invalid prop ${propFullName}  supplied to ${componentName}. Validation failed.`
        );
      }
    }
  ),
  updateTaskHandler: PropTypes.func,
  removeTaskHandler: PropTypes.func,
};

Task.defaultPrps = {
  task: {},
  updateTaskHandler: {},
  removeTaskHandler: {},
};

export default Task;
