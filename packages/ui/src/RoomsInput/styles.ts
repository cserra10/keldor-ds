import { Theme, createStyles, CSSProperties } from '@keldor-ds/themes/build'

export type StylesAPI = {
  root: CSSProperties
  label: CSSProperties
  control: CSSProperties
}

export default (theme: Theme) => {
  const styles = createStyles({
    root: {

    },

    label: {
      marginBottom: theme.spacing(1)
    },

    control: {
      display: 'flex',
      width: '100%',
      padding: theme.spacing(1),
      border: `1px solid ${theme.palette.grey.A100}`,
      justifyContent: 'space-evenly'
    }
  }) as StylesAPI

  return styles
}