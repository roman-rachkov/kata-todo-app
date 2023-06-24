import React from 'react'

const IconButton = (props) => {
  return <button type="button" className={['icon', props.icon].join(' ')} {...props}></button>
}

export default IconButton
