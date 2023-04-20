import React from 'react'
import PropTypes from 'prop-types'

const Index = ({ changeFilterHandler, selected, children }) => {
  return (
    <li>
      <button className={selected ? 'selected' : ''} onClick={() => changeFilterHandler(null)}>
        {children}
      </button>
    </li>
  )
}

Index.propType = {
  changeFilterHandler: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.string,
}

Index.defaultProps = {
  changeFilterHandler: {},
  selected: false,
  children: 'All',
}

export default Index
