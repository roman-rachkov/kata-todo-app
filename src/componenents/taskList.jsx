import React from 'react'
import PropTypes from 'prop-types'

import Task from './task.jsx'

var a

const TaskList = ({ tasks, updateTaskHandler, removeTaskHandler }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => {
        return (
          <Task key={task.id} task={task} updateTaskHandler={updateTaskHandler} removeTaskHandler={removeTaskHandler} />
        )
      })}
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      description: PropTypes.string,
      completed: PropTypes.bool,
      created: PropTypes.instanceOf(Date),
    })
  ),
  updateTaskHandler: PropTypes.func,
  removeTaskHandler: PropTypes.func,
}

TaskList.defaultProps = {
  tasks: {},
  updateTaskHandler: {},
  removeTaskHandler: {},
}

export default TaskList
