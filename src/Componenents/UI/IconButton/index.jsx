import React from 'react'

import Button from '../Button/'

const IconButton = (props) => {
  return <Button className={['icon', props.icon].join(' ')} {...props}></Button>
}

export default IconButton
