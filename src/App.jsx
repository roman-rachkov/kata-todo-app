import React, { useMemo, useState } from "react";
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

  const [filter, setFilter] = useState(null);

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

    if (index !== -1) {
      const tmpArr = tasks.slice();
      tmpArr.splice(index, 1, task);
      setTasks(tmpArr);
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const removeCompleted = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };

  const left = (() => tasks.filter((t) => t.completed === false).length)();

  const filteredTasks = (() =>
    !filter
      ? tasks
      : tasks.filter((t) => t.completed === (filter === "completed")))();

  return (
    <section className="todoapp">
      <NewTaskForm create={addTask} />
      <section className="main">
        <TaskList
          tasks={filteredTasks}
          remove={removeTask}
          update={updateTask}
        />
      </section>
      <Footer
        left={left}
        filter={filter}
        setFilter={setFilter}
        removeCompleted={removeCompleted}
      />
    </section>
  );
}

export default App;
