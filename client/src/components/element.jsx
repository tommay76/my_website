import React from 'react'

import Chip from '@material-ui/core/Chip'

function Child ({ name, remove }) {
  return (
    <Chip label={name} onDelete={() => remove(name)} color='secondary' />
  )
}

export default Child
