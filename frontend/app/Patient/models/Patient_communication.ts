/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from "./CodeableConcept";

export type Patient_communication = {
  /**
   * Unique id for inter-element referencing
   */
  id: string;
  /**
   * The language which can be used to communicate with the patient about his or her health
   */
  language?: CodeableConcept;
  /**
   * Language preference indicator
   */
  preferred?: boolean;
};
