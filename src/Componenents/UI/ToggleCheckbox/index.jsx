import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'

const ToggleCheckbox = ({ label, id, onChange, checked }) => {
  return (
    <Input
      className="toggle"
      type="checkbox"
      label={label}
      id={id}
      showLabel={true}
      checked={checked}
      onChange={onChange}
    />
  )
}

ToggleCheckbox.propTypes = {
  label: PropTypes.node,
  id: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}

ToggleCheckbox.defaultProps = {
  label: '',
  id: crypto.randomUUID(),
  onChange: {},
  checked: {},
}

export default ToggleCheckbox
