import React from 'react'
import { action } from '@storybook/addon-actions'
import Rooms from './Rooms'

export default {
  component: Rooms,
  title: 'Rooms'
}

export const Default = () => {
  return (
    <Rooms
      onChange={action('onChange')}
    />
  )
}
