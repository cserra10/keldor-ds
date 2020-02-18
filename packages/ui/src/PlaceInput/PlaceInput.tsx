import React, { useEffect } from 'react'
import clsx from 'clsx'
import useAutocomplete from '@material-ui/lab/useAutocomplete'
import SearchIcon from '@material-ui/icons/Search'
import CircularProgress from '@material-ui/core/CircularProgress'
import InputBase from '@material-ui/core/InputBase'
import { createStyles, makeStyles } from '@material-ui/core'
import styles from '@keldor-ds/themes/build/bestday/styles/search/PlaceInput'
import { debounce } from '../utils'
import PlaceList from './PlaceList'
import { PlaceInputProps, PlaceType } from './types'

// @ts-ignore
export const useStyles = makeStyles(createStyles(styles))

const PlaceInput: React.FC<PlaceInputProps> = (
  {
    className: classNameProp,
    fetchPlaces,
    placeholder = 'Search place',
    onPlaceChange,
    showHeader = true,
    autoFocus = false,
    labelProperty = 'Label',
    groupBy = 'Type',
    value = null,
    endAdornment
  }: PlaceInputProps
) => {
  const [places, setPlaces] = React.useState<PlaceType[]>([])
  const [place, setPlace] = React.useState<PlaceType>(value)
  const [loading, setLoading] = React.useState<boolean>(false)

  // This shouldn´t live here... Or how can can deal with share all autocomplete logic?
  const handleInputChange = async (_: React.ChangeEvent<{}>, searchText: string) => {
    if (!searchText || searchText.length < 3) return false

    try {
      setLoading(true)
      const { results } = await fetchPlaces(searchText)
      setPlaces(results)
    } catch (err) {
      setPlaces([])
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (_: React.ChangeEvent<{}>, p: PlaceType) => {
    setPlace(p)
  }

  useEffect(() => {
    onPlaceChange(place)
  }, [place])

  const {
    getRootProps,
    getInputProps,
    getOptionProps,
    groupedOptions
  } = useAutocomplete({
    clearOnEscape: true,
    options: places as Record<string, string>[],
    getOptionLabel: p => p[labelProperty],
    onChange: handleChange,
    onInputChange: debounce(handleInputChange, 200)
  })

  const classes = useStyles()
  const className = clsx(classNameProp, classes.root)

  return (
    <div
      className={className}
      {...getRootProps()}
    >
      <InputBase
        {...getInputProps()}
        className={classes.input}
        autoFocus={autoFocus}
        placeholder={placeholder}
        startAdornment={<SearchIcon className={classes.inputStartAdornment} />}
        endAdornment={(
          <>
            {loading ? (
              <div>
                <CircularProgress
                  className={classes.inputEndAdornment}
                  disableShrink
                  size={20}
                />
              </div>
            ) : null}
            {endAdornment}
          </>
        )}
      />
      {groupedOptions.length > 0 && (
        <PlaceList
          className={classes.placeList}
          optionProps={getOptionProps}
          showHeader={showHeader}
          places={groupedOptions}
          labelProperty={labelProperty}
          groupBy={groupBy}
        />
      )}
    </div>
  )
}

export default PlaceInput
