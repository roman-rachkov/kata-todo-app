import React from 'react'
import PropTypes from 'prop-types'

import Task from '../Task'

const Index = ({ tasks, updateTaskHandler, removeTaskHandler }) => {
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

Index.propTypes = {
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

Index.defaultProps = {
  tasks: {},
  updateTaskHandler: {},
  removeTaskHandler: {},
}

export default Index
