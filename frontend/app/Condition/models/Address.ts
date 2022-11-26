/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Period } from "./Period";

export type Address = {
  /**
   * Name of city, town etc.
   */
  city?: string;
  /**
   * Country (e.g. can be ISO 3166 2 or 3 letter code)
   */
  country?: string;
  /**
   * District name (aka county)
   */
  district?: string;
  id: string;
  /**
   * Street name, number, direction & P.O. Box etc.
   */
  line?: string;
  /**
   * Time period when address was/is in use
   */
  period?: Period;
  /**
   * Postal code for area
   */
  postalCode?: string;
  /**
   * Sub-unit of country (abbreviations ok)
   */
  state?: string;
  /**
   * Text representation of the address
   */
  text?: string;
  /**
   * postal | physical | both
   */
  type?: string;
  /**
   * home | work | temp | old | billing - purpose of this address
   */
  use?: string;
};
