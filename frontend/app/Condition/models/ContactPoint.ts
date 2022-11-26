/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Period } from "./Period";

export type ContactPoint = {
  id: string;
  /**
   * Time period when the contact point was/is in use
   */
  period?: Period;
  /**
   * Specify preferred order of use (1 = highest)
   */
  rank?: number;
  /**
   * phone | fax | email | pager | url | sms | other
   */
  system?: string;
  /**
   * home | work | temp | old | mobile - purpose of this contact point
   */
  use?: string;
  /**
   * The actual contact point details
   */
  value?: string;
};
