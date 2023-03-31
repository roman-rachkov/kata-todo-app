import React, { useState } from "react";
import NewTaskForm from "./componenents/newTaskForm";
import Footer from "./componenents/footer.jsx";
import TaskList from "./componenents/taskList.jsx";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      completed: true,
      created: Date.now(),
      description: "Completed task",
    },
    {
      id: 2,
      completed: false,
      created: Date.now(),
      description: "Active task",
    },
    {
      id: 3,
      completed: false,
      created: Date.now(),
      description: "Active task",
    },
  ]);

  const addTask = (taskDescription) => {
    const task = {
      id: crypto.randomUUID(),
      completed: false,
      created: Date.now(),
      description: taskDescription,
    };

    setTasks([...tasks, task]);
  };

  const updateTask = (task) => {
    const index = tasks.findIndex((t) => t.id === task.id);
    if (index) {
      const tmpArr = tasks.slice();
      tmpArr.splice(index, 1, task);
      setTasks([...tmpArr]);
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <section className="todoapp">
      <NewTaskForm create={addTask} />
      <section className="main">
        <TaskList tasks={tasks} remove={removeTask} update={updateTask} />
      </section>
      <Footer />
    </section>
  );
}

export default App;
