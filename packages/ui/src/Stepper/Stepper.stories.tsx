import React, { useState } from 'react'
import Stepper from './Stepper'

export default {
  component: Stepper,
  title: 'Stepper'
}

export const Default = () => {
  const [value, setValue] = useState(0)

  return (
    <Stepper
      value={value}
      onChange={setValue}
    />
  )
}
