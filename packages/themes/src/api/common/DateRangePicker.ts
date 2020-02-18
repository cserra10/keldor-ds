import { CSSProperties } from '@material-ui/styles/withStyles'

export interface StylesAPI {
  root?: CSSProperties
  day?: CSSProperties
  hidden?: CSSProperties
  current?: CSSProperties
  focusedRange?: CSSProperties
  dayDisabled?: CSSProperties
  beginCap?: CSSProperties
  endCap?: CSSProperties
  focusedFirst?: CSSProperties
  focusedLast?: CSSProperties
  dateRangePickerDialog?: CSSProperties

  /**
   * Styles applied to the Inputs container
   */
  textFieldsContainer?: CSSProperties

  /**
   * Styles applied to the begin input container
   */
  textFieldBegin?: CSSProperties

  /**
   * Styles applied to the begin input label
   */
  textFieldBeginLabel?: CSSProperties

  /**
   * Styles applied to the begin input
   */
  textFieldBeginInput?: CSSProperties

  /**
   * Styles applied to the end input container
   */
  textFieldEnd?: CSSProperties

  /**
   * Styles applied to the end input label
   */
  textFieldEndLabel?: CSSProperties

  /**
   * Styles applied to the end input
   */
  textFieldEndInput?: CSSProperties
}

export type ClassNamesAPI = Record<keyof StylesAPI, string>
