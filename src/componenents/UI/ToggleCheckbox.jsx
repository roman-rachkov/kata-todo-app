import React from 'react'

import Input from './input.jsx'

const ToggleCheckbox = ({ onChange, checked }) => {
  return <Input className="toggle" type="checkbox" checked={checked} onChange={onChange} />
}

export default ToggleCheckbox
