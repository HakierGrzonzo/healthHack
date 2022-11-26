/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Quantity } from "./Quantity";

export type Ratio = {
  /**
   * Denominator value
   */
  denominator?: Quantity;
  id: string;
  /**
   * Numerator value
   */
  numerator?: Quantity;
};
