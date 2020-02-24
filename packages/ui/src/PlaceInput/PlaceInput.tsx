import React, { memo, useEffect } from 'react'
import clsx from 'clsx'
import CloseIcon from '@material-ui/icons/Close'
import useAutocomplete from '@material-ui/lab/useAutocomplete'
import SearchIcon from '@material-ui/icons/Search'
import CircularProgress from '@material-ui/core/CircularProgress'
import InputBase from '@material-ui/core/InputBase'
import ButtonBase from '@material-ui/core/ButtonBase'
import { withStyles } from '@material-ui/styles'
import { defaultStyles } from './styles'
import { combineStyles, debounce } from '../utils'
import PlaceList from '../PlaceList/PlaceList'
import { PlaceInputProps, PlaceType } from './types'

export const styles = combineStyles(defaultStyles, {})

const PlaceInput: React.FC<PlaceInputProps> = (
  {
    className: classNameProp,
    classes,
    fetchPlaces,
    placeholder = 'Search place',
    onPlaceChange,
    showHeader = true,
    autoFocus = false,
    labelProperty = 'Label',
    groupBy = 'Type',
    value = null,
    onCancel
  }: PlaceInputProps
) => {
  const [places, setPlaces] = React.useState<PlaceType[]>([])
  const [place, setPlace] = React.useState<PlaceType>(value)
  const [loading, setLoading] = React.useState<boolean>(false)

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
    groupedOptions,
    getClearProps
  } = useAutocomplete({
    clearOnEscape: true,
    options: places as Record<string, string>[],
    getOptionLabel: p => p[labelProperty],
    onChange: handleChange,
    onInputChange: debounce(handleInputChange, 200)
  })

  const className = clsx(classNameProp, classes.root)

  return (
    <div
      className={className}
      {...getRootProps()}
    >
      <ButtonBase
        className={classes.cancel}
        onClick={onCancel}
      >
        Cancel
      </ButtonBase>

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
            <CloseIcon {...getClearProps()} />
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

export default memo(withStyles(styles)(PlaceInput))
