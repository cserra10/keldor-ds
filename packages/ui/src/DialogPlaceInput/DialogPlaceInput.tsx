import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import Dialog from '@material-ui/core/Dialog'
import PlaceIcon from '@material-ui/icons/Place'
import { withStyles } from '@keldor-ds/themes/build'
import PlaceInput, { PlaceType } from '../PlaceInput'
import { DialogPlaceInputProps } from './types'
import styles from './styles'

const DialogPlaceInput: React.FunctionComponent<DialogPlaceInputProps> = (
  {
    className: classNameProp,
    classes,
    onPlaceChange,
    placeholder = 'Tap to search',
    label = 'Place:',
    fetchPlaces,
    value = null,
    renderInput: renderInputProp,
    showLabel = true,
    showStartAdornment = true
  }: DialogPlaceInputProps
) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const closeDialog = () => setDialogOpen(false)
  const openDialog = () => setDialogOpen(true)

  const className = clsx(classNameProp, classes.root)

  const handlePlaceChange = (p: PlaceType) => {
    onPlaceChange(p)
    closeDialog()
  }

  const renderInput = renderInputProp || (
    (p: PlaceType) => (
      <>
        {showLabel && <InputLabel className={classes.label}>{label}</InputLabel>}
        <InputBase
          className={classes.input}
          startAdornment={
            showStartAdornment && <PlaceIcon className={classes.originInputStartAdornment} />
          }
          value={p ? p.Label : ''}
          placeholder={placeholder}
          onClick={openDialog}
          readOnly
        />
      </>
    )
  )

  return (
    <div className={className}>
      {renderInput(value)}

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
          onCancel={closeDialog}
        />
      </Dialog>
    </div>
  )
}

export default React.memo(withStyles(styles)(DialogPlaceInput))
