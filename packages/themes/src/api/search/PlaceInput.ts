export default interface StylesAPI {
  /**
   * Styles applied to the root element
   */
  root?: object;

  /**
   * Styles applied to the root input element
   */
  input?: any;

  /**
   * Styles applied to the start adornment in the input
   */
  inputStartAdornment?: any;

  /**
   * Styles applied to the end adornment in the input
   */
  inputEndAdornment?: any;

  /**
   * Styles applied to input loading icon
   */
  inputLoadingIcon?: any;

  /**
   * Styles applied to the list of places
   */
  placeList?: any;

  /**
   * Styles applied to the places group element
   */
  placeGroup?: any;

  /**
   * Styles applied to the header element when the places are grouped
   */
  placeHeader?: any;

  /**
   * Styles applied to the root place element
   */
  place?: any;

  /**
   * Styles applied to place icon
   */
  placeIcon?: any;

  /**
   * Styles applied to the root place text element
   */
  placeLabel?: any;
};
