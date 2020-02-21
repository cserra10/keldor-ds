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
      onChange={action('onChange')}
      onSubmit={action('onSubmit')}
    />
  )
}
