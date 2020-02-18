export default interface StylesAPI {
  /**
   * Style applied to the day item in calendar
   */
  day: any;

  /**
   * Style to hide a element
   */
  hidden: any;

  /**
   * Style applied to disabled day item 
   */
  dayDisabled: any;

  /**
   * Style applied to current day item in calendar
   */
  current: any;

  /**
   * Style applied to selected day item in calendar
   */
  daySelected: any;

  /**
   * Style applied to start range of date in calendar
   */
  dayRangeStart: any,

  /**
   * Style applied to end range of date in calendar
   */
  dayRangeEnd: any;

  /**
   * Style applied to in range of date in calendar
   */
  dayInRange: any;
}
