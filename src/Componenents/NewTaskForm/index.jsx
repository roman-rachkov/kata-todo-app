import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Input from '../UI/Input/'

const NewTaskForm = ({ handleCreateTask }) => {
  const [taskDescription, setTaskDescription] = useState('')
  const [taskMinTimer, setTaskMinTimer] = useState('')
  const [taskSecTimer, setTaskSecTimer] = useState('')

  const createNewTaskHandler = (event) => {
    event.preventDefault()
    if (taskDescription.trim() === '') {
      return
    }

    const min = isNaN(parseInt(taskMinTimer)) ? 0 : parseInt(taskMinTimer)
    const sec = isNaN(parseInt(taskSecTimer)) ? 0 : parseInt(taskSecTimer)

    console.log(min, sec)

    handleCreateTask(taskDescription.trim(), parseInt(min) * 60 + parseInt(sec))
    setTaskDescription('')
    setTaskMinTimer('')
    setTaskSecTimer('')
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form action="#" className={'new-todo-form'} method="POST" onSubmit={createNewTaskHandler}>
        <Input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={taskDescription}
          onChange={(event) => setTaskDescription(event.target.value)}
          label={'Add new ToDo'}
          required
          name="task-description"
          id={'task-description'}
        />
        <Input
          className="new-todo-form__timer"
          placeholder="Min"
          label="Min"
          autoFocus
          value={taskMinTimer}
          name="task-min"
          type="number"
          onChange={(event) => setTaskMinTimer(event.target.value)}
          id={'task-min'}
          required
        />
        <Input
          className="new-todo-form__timer"
          placeholder="Sec"
          label="Sec"
          autoFocus
          name="task-sec"
          value={taskSecTimer}
          type="number"
          onChange={(event) => setTaskSecTimer(event.target.value)}
          id={'task-sec'}
          required
        />
        <button type="submit" className={'hidden'}>
          Add Task
        </button>
      </form>
    </header>
  )
}

NewTaskForm.propTypes = {
  handleCreateTask: PropTypes.func,
}

NewTaskForm.defaultProps = {
  create: {},
}

export default NewTaskForm
