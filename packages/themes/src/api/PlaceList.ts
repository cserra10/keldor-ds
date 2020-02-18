export default interface StylesAPI {
  /**
   * Styles applied to the root element
   */
  root?: object

  /**
   * Styles applied to the places group element
   */
  placeGroup?: object

  /**
   * Styles applied to the header element when the places are grouped
   */
  placeHeader?: object

  /**
   * Styles applied to the root place element
   */
  place?: object

  /**
   * Styles applied to place icon
   */
  placeIcon?: object

  /**
   * Styles applied to the root place text element
   */
  placeLabel?: object
}
