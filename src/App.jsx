import React, { useEffect, useMemo, useRef, useState } from 'react'

import NewTaskForm from './Componenents/NewTaskForm'
import Footer from './Componenents/Footer'
import TaskList from './Componenents/TaskList'

function App() {
  const [tasks, setTasks] = useState([createTask('Task 1'), createTask('Task 2'), createTask('Task 3')])

  const [filter, setFilter] = useState(null)

  function createTask(taskDescription, timer = 600) {
    return {
      id: crypto.randomUUID(),
      completed: false,
      created: new Date(),
      description: taskDescription,
      timeTrack: false,
      currentTimer: timer,
    }
  }

  const requestRef = useRef()
  const previousTimeRef = useRef()

  const updateAllTimers = (time) => {
    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = time
    }
    const deltaTime = time - previousTimeRef.current
    if (deltaTime >= 1000) {
      const tmpArr = tasks.slice()

      tmpArr.forEach((task) => {
        if (task.timeTrack) {
          task.currentTimer -= parseInt(deltaTime / 1000)
          if (task.currentTimer <= 0) {
            task.timeTrack = false
            alert(`Task ${task.description} time ended`)
          }
        }
      })
      setTasks(tmpArr)
      previousTimeRef.current = time
    }

    requestRef.current = requestAnimationFrame(updateAllTimers)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateAllTimers)
    return () => cancelAnimationFrame(requestRef.current)
  }, [tasks])

  const addTask = (taskDescription, timer) => {
    console.log(taskDescription, timer)
    setTasks([...tasks, createTask(taskDescription, timer)])
  }

  const updateTask = (task) => {
    const copyArr = tasks.slice()
    const index = copyArr.findIndex((t) => t.id === task.id)

    if (index !== -1) {
      copyArr.splice(index, 1, task)
      setTasks(copyArr)
    }
  }

  const removeTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId))
  }

  const removeCompleted = () => {
    setTasks(tasks.filter((t) => !t.completed))
  }

  const left = useMemo(() => tasks.filter((t) => t.completed === false).length, [tasks])

  const filteredTasks = useMemo(
    () => (!filter ? tasks : tasks.filter((t) => t.completed === (filter === 'completed'))),
    [filter, tasks]
  )

  return (
    <section className="todoapp">
      <NewTaskForm handleCreateTask={addTask} />
      <section className="main">
        <TaskList tasks={filteredTasks} removeTaskHandler={removeTask} updateTaskHandler={updateTask} />
      </section>
      <Footer left={left} filter={filter} setFilterHandler={setFilter} removeCompletedHandler={removeCompleted} />
    </section>
  )
}

export default App
