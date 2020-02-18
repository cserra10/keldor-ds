import React from 'react'
import clsx from 'clsx'
import FlightIcon from '@material-ui/icons/Flight'
import HotelIcon from '@material-ui/icons/Hotel'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import PlaceIcon from '@material-ui/icons/Place'
import { createStyles, makeStyles } from '@material-ui/core'
import styles from '@keldor-ds/themes/build/bestday/styles/PlaceList'
import { PlaceListProps, PlaceType } from './types'
import { groupBy } from '../utils'

// @ts-ignore
export const useStyles = makeStyles(createStyles(styles))

type Indexes = {
  [key: string]: JSX.Element | string
}

const ICONS = {
  D: <LocationCityIcon />,
  C: <LocationCityIcon />,
  H: <HotelIcon />,
  A: <FlightIcon />
}

const PLACE_TYPES = {
  D: 'Destination',
  C: 'City',
  H: 'Hotels',
  A: 'Airport'
}

const PlaceList: React.FC<PlaceListProps> = (
  {
    className: classNameProp,
    optionProps,
    places,
    labelProperty = 'Label',
    groupBy: groupByProp = 'Type',
    showHeader = false,
    showPlaceIcon = false
  }: PlaceListProps
) => {
  let index = -1
  const groupedPlaces = groupBy(places, (p: PlaceType) => (p ? p[groupByProp] : ''))

  const classes = useStyles()
  const className = clsx(classNameProp, classes.root)

  return (
    <div className={className}>
      {groupedPlaces.map(group => (
        <div
          className={classes.placeGroup}
          key={group.key}
        >
          {showHeader && (
            <div className={classes.placeHeader}>
              {(ICONS as Indexes)[group.key]}
              {(PLACE_TYPES as Indexes)[group.key]}
            </div>
          )}
          {group.options.map(place => {
            index += 1
            return place && (
              <div
                className={classes.place}
                key={place.ID}
                {...optionProps({ option: place, index })}
              >
                {showPlaceIcon && <PlaceIcon className={classes.placeIcon} />}
                <div className={classes.placeLabel}>
                  {place[labelProperty]}
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default PlaceList
