import React, { useState } from "react";
import Input from "./UI/input.jsx";

const NewTaskForm = ({ create }) => {
  const [taskDescription, setTaskDescription] = useState(null);

  const createNewTask = (event) => {
    event.preventDefault();
    create(taskDescription);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form action="#" method="POST" onSubmit={createNewTask}>
        <Input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={(event) => setTaskDescription(event.target.value)}
        />
      </form>
    </header>
  );
};

export default NewTaskForm;
