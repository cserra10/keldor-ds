export default interface StylesAPI {
  /**
   * Styles applied to the root element
   */
  root?: object

  /**
   * Styles applied to the label element
   */
  label?: object

  /**
   * Styles applied to the option element
   */
  option?: object

  /**
   * Styles applied to the select box element
   */
  select?: object

  /**
   * Styles applied to the radioGroup element
   */
  radioGroup?: object

  /**
   * Styles applied to the label element if the control type is 'select' or 'native'
   */
  labelSelect?: object

  /**
   * Styles applied to the option element if the control type is 'select'
   */
  optionSelect?: object

  /**
   * Styles applied to the label element if the control type is 'radio'
   */
  labelRadio?: object

  /**
   * Styles applied to the option element if the control type is 'radio'
   */
  optionRadio?: object
}
