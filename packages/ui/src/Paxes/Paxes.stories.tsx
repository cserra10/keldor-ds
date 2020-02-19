import React from 'react'
import { action } from '@storybook/addon-actions'
import Paxes from './Paxes'

export default {
  component: Paxes,
  title: 'Paxes'
}

export const Default = () => {
  return (
    <Paxes
      value={{
        adults: 2
      }}
      onChange={action('onChange')}
    />
  )
}
