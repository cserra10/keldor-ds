import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import Dialog from '@material-ui/core/Dialog'
import PlaceIcon from '@material-ui/icons/Place'
import CloseIcon from '@material-ui/icons/Close'
import { createStyles, makeStyles } from '@material-ui/core'
import styles from '@keldor-ds/themes/build/bestday/styles/search/DialogPlaceInput'
import PlaceInput, { PlaceType } from '../PlaceInput'
import { DialogPlaceInputProps } from './types'

// @ts-ignore
export const useStyles = makeStyles(createStyles(styles))

const DialogPlaceInput: React.FunctionComponent<DialogPlaceInputProps> = ({
  className: classNameProp,
  onPlaceChange,
  placeholder = 'Search places',
  label = 'Place:',
  fetchPlaces,
  value = null
}: DialogPlaceInputProps) => {
  const [place, setPlace] = useState<PlaceType | null>(value)
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  const classes = useStyles()
  const className = clsx(classNameProp, classes.root)

  const closeDialog = () => setDialogOpen(false)
  const openDialog = () => setDialogOpen(true)
  const handlePlaceChange = (p: PlaceType) => setPlace(p)

  useEffect(() => {
    onPlaceChange(place)
    closeDialog()
  }, [place])

  return (
    <div className={className}>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <InputBase
        className={classes.input}
        startAdornment={<PlaceIcon className={classes.originInputStartAdornment} />}
        value={place ? place.Label : ''}
        placeholder={placeholder}
        onClick={openDialog}
        readOnly
      />
      <Dialog
        fullScreen
        open={dialogOpen}
        onClose={closeDialog}
        transitionDuration={0}
      >
        <PlaceInput
          placeholder={placeholder}
          fetchPlaces={fetchPlaces}
          onPlaceChange={handlePlaceChange}
          autoFocus
          value={place}
          endAdornment={<CloseIcon onClick={closeDialog} />}
        />
      </Dialog>
    </div>
  )
}

export default React.memo(DialogPlaceInput)
