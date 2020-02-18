import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean
} from '@storybook/addon-knobs'
import PlaceInput from './PlaceInput'
import fetchPlaces from './fetchPlaces'

export default {
  component: PlaceInput,
  title: 'PlaceInput',
  decorators: [withKnobs]
}

export const Default = withInfo()(
  () => (
    <PlaceInput
      fetchPlaces={fetchPlaces}
      placeholder={text('placeholder', 'Search places')}
      showHeader={boolean('show header', true)}
      disabled={boolean('disabled', false)}
      onPlaceChange={action('on place change')}
      labelProperty="Label"
    />
  )
)

export const Hotels = withInfo()(
  () => (
    <PlaceInput
      fetchPlaces={fetchPlaces}
      placeholder="Hotel, city or destination"
      onPlaceChange={action('on place change')}
    />
  )
)

export const Airports = withInfo()(
  () => (
    <PlaceInput
      fetchPlaces={fetchPlaces}
      placeholder="Airport name"
      onPlaceChange={action('on place change')}
    />
  )
)

export const Tours = withInfo()(
  () => (
    <PlaceInput
      fetchPlaces={fetchPlaces}
      placeholder="Tour or destination"
      onPlaceChange={action('on place change')}
    />
  )
)
