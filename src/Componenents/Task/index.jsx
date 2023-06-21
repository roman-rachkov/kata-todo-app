import React, { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import ToggleCheckbox from '../UI/ToggleCheckbox/'
import IconButton from '../UI/IconButton/'
import Input from '../UI/Input/'
import Button from '../UI/Button/index.jsx'

const Task = ({ task, updateTaskHandler, removeTaskHandler }) => {
  const [editing, setEditing] = useState(false)
  const [taskDescription, setDescription] = useState(task.description)

  const updateTask = () => {
    setEditing(false)
    updateTaskHandler({ ...task, description: taskDescription })
  }

  const handleCompleted = (event) => {
    updateTaskHandler({ ...task, completed: event.target.checked })
  }

  const handleStartTaskTrack = () => {
    updateTaskHandler({ ...task, timeTrack: true })
  }

  const handleStopTaskTrack = () => {
    updateTaskHandler({ ...task, timeTrack: false })
  }

  const classes = [task.completed ? 'completed' : '', editing ? 'editing' : '']
  const formatTimer = (time) => {
    const sec = Math.abs(time % 60)
    const min = Math.abs(parseInt(time / 60))
    return `${time < 0 ? '-' : ''}${min.toString().length > 1 ? min : '0' + min}:${
      sec.toString().length > 1 ? sec : '0' + sec
    }`
  }

  return (
    <li className={classes.join(' ')}>
      <div className="view">
        <ToggleCheckbox
          checked={task.completed}
          onChange={handleCompleted}
          label={
            <>
              <span className="title">{task.description}</span>
              <span className="description">
                {!task.timeTrack ? (
                  <Button className="icon icon-play" onClick={handleStartTaskTrack}></Button>
                ) : (
                  <Button className="icon icon-pause" onClick={handleStopTaskTrack}></Button>
                )}
                {formatTimer(task.currentTimer)}
              </span>
              <span className="description">created {formatDistanceToNow(task.created, { includeSeconds: true })}</span>
            </>
          }
          id={task.id}
        />
        <IconButton icon="icon-edit" onClick={() => setEditing(true)}></IconButton>
        <IconButton icon="icon-destroy" onClick={() => removeTaskHandler(task.id)}></IconButton>
      </div>
      {editing ? (
        <form action="#" method="POST" onSubmit={updateTask}>
          <Input
            type="text"
            className="edit"
            placeholder="Editing task"
            value={taskDescription}
            label={'Edit ToDo'}
            onChange={(event) => setDescription(event.target.value)}
          />
        </form>
      ) : (
        ''
      )}
    </li>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    completed: PropTypes.bool,
    created: PropTypes.instanceOf(Date),
    timeTrack: PropTypes.bool,
    currentTimer: PropTypes.number,
  }),
  updateTaskHandler: PropTypes.func,
  removeTaskHandler: PropTypes.func,
}

Task.defaultPrps = {
  task: {},
  updateTaskHandler: {},
  removeTaskHandler: {},
}

export default Task
