import React from 'react'
import PropTypes from 'prop-types'

import Button from './UI/button.jsx'
import TaskFilter from './taskFilter.jsx'

const Footer = ({ left, filter, setFilterHandler, removeCompletedHandler }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{left} items left</span>
      <ul className="filters">
        <TaskFilter changeFilterHandler={() => setFilterHandler(null)} selected={!filter}>
          All
        </TaskFilter>
        <TaskFilter selected={filter && filter === 'active'} changeFilterHandler={() => setFilterHandler('active')}>
          Active
        </TaskFilter>
        <TaskFilter
          selected={filter && filter === 'completed'}
          changeFilterHandler={() => setFilterHandler('completed')}
        >
          Completed
        </TaskFilter>
      </ul>
      <Button className="clear-completed" onClick={removeCompletedHandler}>
        Clear completed
      </Button>
    </footer>
  )
}

Footer.propTypes = {
  left: PropTypes.number,
  filter: PropTypes.string,
  setFilterHandler: PropTypes.func,
  removeCompletedHandler: PropTypes.func,
}

Footer.defaultProps = {
  left: 0,
  filter: null,
  setFilterHandler: {},
  removeCompletedHandler: {},
}
export default Footer
