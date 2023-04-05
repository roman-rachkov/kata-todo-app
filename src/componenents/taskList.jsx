import React from "react";
import Task from "./task.jsx";
import PropTypes from "prop-types";

const TaskList = ({ tasks, updateTaskHandler, removeTaskHandler }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            updateTaskHandler={updateTaskHandler}
            removeTaskHandler={removeTaskHandler}
          />
        );
      })}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.objectOf(
      (props, propName, componentName, location, propFullName) => {
        if (!["id", "created", "completed", "description"].includes(propName)) {
          return new Error(
            `Invalid prop ${propFullName}  supplied to ${componentName}. Validation failed.`
          );
        }
      }
    )
  ),
  updateTaskHandler: PropTypes.func,
  removeTaskHandler: PropTypes.func,
};

TaskList.defaultProps = {
  tasks: {},
  updateTaskHandler: {},
  removeTaskHandler: {},
};

export default TaskList;
