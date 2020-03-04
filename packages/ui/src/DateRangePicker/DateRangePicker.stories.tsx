import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { action } from '@storybook/addon-actions'
import DateRangePicker from './DateRangePicker'

export default {
  component: DateRangePicker,
  title: 'DateRangePicker',
  decorators: [
    (storyFn: Function) => (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>{storyFn()}</MuiPickersUtilsProvider>
    )
  ]
}

export const Default = () => (
  <DateRangePicker
    value={[]}
    onChange={action('on change')}
    disablePast
    format="dd/MM/yyyy"
  />
)
