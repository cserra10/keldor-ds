import React, {useEffect, useState} from 'react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import DialogPlaceInput from './DialogPlaceInput'
import fetchPlaces from '../PlaceInput/fetchPlaces'
import { PlaceType } from '../PlaceInput'

export default {
  component: DialogPlaceInput,
  title: 'DialogPlaceInput',
  decorators: [withKnobs]
}

const divContainerStyle = {
  padding: '24px 20px',
  borderRadius: '8px'
}

export const Default = withInfo()(
  () => (
    <div style={divContainerStyle}>
      <DialogPlaceInput
        fetchPlaces={fetchPlaces}
        onPlaceChange={action('on change')}
      />
    </div>
  )
)


const OriginDestinationDemo = ({ onChange }: {onChange: Function}) => {
  const [data, setData] = useState<{origin: PlaceType, destination: PlaceType}>({
    origin: null,
    destination: null
  })

  const handleOnChange = (type: string, place: PlaceType) => {
    setData(prevState => ({
      ...prevState,
      [type]: place
    }))
  }

  useEffect(() => {
    onChange(data)
  }, [data])

  return (
    <div
      style={{
        padding: 15,
        border: '1px solid #e7e7e7'
      }}
    >
      <DialogPlaceInput
        label="Origin:"
        fetchPlaces={fetchPlaces}
        onPlaceChange={(p: PlaceType) => handleOnChange('origin', p)}
      />

      <br />

      <DialogPlaceInput
        label="Destination:"
        fetchPlaces={fetchPlaces}
        onPlaceChange={(p: PlaceType) => handleOnChange('destination', p)}
      />
    </div>
  )
}

export const OriginDestination = withInfo()(
  () => <OriginDestinationDemo onChange={action('onChange')} />
)
