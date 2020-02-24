import React from 'react'
import { action } from '@storybook/addon-actions'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import PackageSearchBox from './PackageSearchBox'
import fetchPlaces from '../PlaceInput/fetchPlaces'

export default {
  component: PackageSearchBox,
  title: 'PackageSearchBox',
  decorators: [
    (storyFn: Function) => (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>{storyFn()}</MuiPickersUtilsProvider>
    )
  ]
}

export const Default = () => {
  return (
    <PackageSearchBox
      fetchPlaces={fetchPlaces}
      onChange={action('onChange')}
      onSubmit={action('onSubmit')}
    />
  )
}
