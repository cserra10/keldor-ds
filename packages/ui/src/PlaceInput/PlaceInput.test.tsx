import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import PlaceInput from './PlaceInput'

const fetchPlaces = (throwError: boolean = false) => () => new Promise((resolve, reject) => {
  if (throwError) reject(new Error('Error'))
  setTimeout(() => {
    resolve(
      JSON.parse('{"results": [{"ID":1641932928,"AuxText":"Cancun","Cantidad":393,"Country":"MX","Label":"Cancún, México","Type":"D","TypeID":"2"}]}')
    )
  }, 1)
})

describe('Testing PlaceInput', () => {
  const component = (
    <PlaceInput
      fetchPlaces={fetchPlaces()}
      placeholder="Hotel, city or destination"
      onPlaceChange={() => null}
      showHeader
      optionLabel="Label"
    />
  )
  const regexp = /Hotel, city or destination/

  it('Should renders place input', () => {
    const { getByPlaceholderText } = render(component)

    expect(getByPlaceholderText(regexp)).not.toBeNull()
  })

  it('Should display results on search and picks the first result', async () => {
    await act(async () => {
      const { getByText, getByPlaceholderText } = render(component)
      const input = getByPlaceholderText(regexp)
      const resultReg = /n, M/

      fireEvent.change(input, { target: { value: 'cancun' } })
      await new Promise(resolve => setTimeout(() => resolve(), 650))

      expect(getByText(resultReg)).not.toBeNull()
      fireEvent.click(getByText(resultReg), { button: 0 })
      await new Promise(resolve => setTimeout(() => resolve(), 50))
      expect((input as HTMLInputElement).value).toMatch(resultReg)
    })
  })

  it('Should throw an error on an \'invalid search\'', async () => {
    await act(async () => {
      const { getByPlaceholderText } = render(
        <PlaceInput
          fetchPlaces={fetchPlaces(true)}
          onPlaceChange={() => null}
          showHeader
        />
      )
      const input = getByPlaceholderText(/Search place/)

      fireEvent.change(input, { target: { value: '' } })
      await new Promise(resolve => setTimeout(() => resolve(), 650))
    })
  })
})
