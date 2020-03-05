import createMuiTheme, { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    styles: Record<string, object>
  }

  interface ThemeOptions {
    styles?: Record<string, object>
  }
}

export default (options: ThemeOptions) => createMuiTheme(options)
export { Theme }
