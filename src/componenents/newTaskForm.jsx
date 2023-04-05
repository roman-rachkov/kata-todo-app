import React, { useState } from "react";
import Input from "./UI/input.jsx";
import PropTypes from "prop-types";

const NewTaskForm = ({ handleCreateTask }) => {
  const [taskDescription, setTaskDescription] = useState("");

  const createNewTaskHandler = (event) => {
    event.preventDefault();
    if (taskDescription.trim() === "") {
      return;
    }
    handleCreateTask(taskDescription.trim());
    setTaskDescription("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form action="#" method="POST" onSubmit={createNewTaskHandler}>
        <Input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={taskDescription}
          onChange={(event) => setTaskDescription(event.target.value)}
          required
        />
      </form>
    </header>
  );
};

NewTaskForm.propTypes = {
  handleCreateTask: PropTypes.func,
};

NewTaskForm.defaultProps = {
  create: {},
};

export default NewTaskForm;
