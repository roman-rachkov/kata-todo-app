import React from 'react'
import PropTypes from 'prop-types'

import classes from './input.module.css'
const Input = ({ id, label, showLabel, ...props }) => {
  return (
    <>
      <input type={props.type ?? 'text'} id={id} className={props.className ?? ''} {...props} />
      {
        <label className={showLabel ? '' : classes['label-hidden']} htmlFor={id}>
          {label}
        </label>
      }
    </>
  )
}

Input.propTypes = {
  label: PropTypes.node,
  id: PropTypes.string,
  showLabel: PropTypes.bool,
}

Input.defaultProps = {
  label: '',
  id: crypto.randomUUID(),
  showLabel: false,
}

export default Input
