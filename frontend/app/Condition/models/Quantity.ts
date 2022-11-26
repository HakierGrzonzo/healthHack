/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Quantity = {
  /**
   * Coded form of the unit
   */
  code?: string;
  /**
   * < | <= | >= | > - how to understand the value
   */
  comparator?: string;
  /**
   * Unique id for inter-element referencing
   */
  id: string;
  /**
   * System that defines coded unit form
   */
  system?: string;
  /**
   * Unit representation
   */
  unit?: string;
  /**
   * Numerical value (with implicit precision)
   */
  value?: number;
};
