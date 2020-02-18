import React from 'react'
import axios from 'axios'
import { render, fireEvent, act } from '@testing-library/react'
import DialogPlaceInput from './DialogPlaceInput'

jest.mock('axios')

const delay = (
  extra: number = 0
) => new Promise(resolve => setTimeout(() => resolve(), 200 + extra))

const mockedAxios = axios as jest.Mocked<typeof axios>

type resultResponse = {
  id: string | number;
  Label: string;
  groupId?: string | number;
  groupLabel?: string;
  metadata?: any;
}

type mockedResponse = {
  results : Array<resultResponse>
}

const getMockedResponse = (searchText: string): mockedResponse => ({
  results: !searchText ? [] : [
    { id: 1, Label: searchText },
    { id: 2, Label: searchText.repeat(2) },
    { id: 3, Label: searchText.repeat(3) }
  ]
})

describe('<OriginDestintation> integration', () => {
  mockedAxios.post.mockImplementation(async (_, data) => {
    await delay()
    return { status: 200, data: getMockedResponse(data.searchText) }
  })

  const fetchHandle = (q: string) => axios.post('https://domain.com/search', { searchText: q }).then(r => r.data)
  const onChange = jest.fn()

  beforeEach(() => {
    onChange.mockClear()
    mockedAxios.post.mockClear()
  })

  const setupRender = () => render(
    <OriginDestintation
      originPlaceholder="Enter origin"
      destinationPlaceholder="Enter destination"
      onChange={onChange}
      fetchPlaces={fetchHandle}
    />
  )

  it('shows a dialog', () => {
    const { getByPlaceholderText } = setupRender()

    act(() => {
      fireEvent.focus(getByPlaceholderText('Enter origin'))
    })

    expect(getByPlaceholderText('Search place')).toBeDefined()
  })

  it('enters origin place', async () => {
    await act(async () => {
      const { getByPlaceholderText, getByText } = setupRender()

      fireEvent.focus(getByPlaceholderText('Enter origin'))

      await delay()

      fireEvent.change(getByPlaceholderText('Search place'), { target: { value: 'can' } })

      await delay(800)

      const itemFound = getByText('can')
      expect(itemFound).toBeDefined()

      fireEvent.click(itemFound, { button: 0 })

      await delay()

      expect(onChange).toBeCalledTimes(1)
    })
  })

  it('enters destination place', async () => {
    await act(async () => {
      const { getByPlaceholderText, getByText } = setupRender()

      fireEvent.focus(getByPlaceholderText('Enter destination'))

      await delay()

      fireEvent.change(getByPlaceholderText('Search place'), { target: { value: 'mex' } })

      await delay(800)

      const itemFound = getByText('mex')
      expect(itemFound).toBeDefined()

      fireEvent.click(itemFound, { button: 0 })

      await delay()

      expect(onChange).toBeCalledTimes(1)
    })
  })
})
