/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";

export type Condition_evidence = {
  /**
   * Manifestation/symptom
   */
  code?: Array<CodeableConcept>;
  /**
   * Supporting information found elsewhere
   */
  detail?: Array<Reference>;
  /**
   * Unique id for inter-element referencing
   */
  id: string;
};
