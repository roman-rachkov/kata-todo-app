import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Input from '../UI/Input/'

const NewTaskForm = ({ handleCreateTask }) => {
  const [taskDescription, setTaskDescription] = useState('')

  const createNewTaskHandler = (event) => {
    event.preventDefault()
    if (taskDescription.trim() === '') {
      return
    }
    handleCreateTask(taskDescription.trim())
    setTaskDescription('')
  }

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
          label={'Add new ToDo'}
          required
        />
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
