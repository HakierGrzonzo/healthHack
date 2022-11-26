/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from "./CodeableConcept";
import type { Period } from "./Period";

export type Identifier = {
  /**
   * Organization that issued id (may be just text)
   */
  assigner?: string;
  id: string;
  /**
   * Time period when id is/was valid for use
   */
  period?: Period;
  /**
   * The namespace for the identifier value
   */
  system?: string;
  /**
   * Description of identifier
   */
  type?: CodeableConcept;
  /**
   * usual | official | temp | secondary | old (If known)
   */
  use?: string;
  /**
   * The value that is unique
   */
  value?: string;
};
