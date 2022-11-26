/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";

export type Condition_stage = {
  /**
   * Formal record of assessment
   */
  assessment?: Array<Reference>;
  /**
   * Unique id for inter-element referencing
   */
  id: string;
  /**
   * Simple summary (disease specific)
   */
  summary?: CodeableConcept;
  /**
   * Kind of staging
   */
  type?: CodeableConcept;
};
