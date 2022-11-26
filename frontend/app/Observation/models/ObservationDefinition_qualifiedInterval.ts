/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from "./CodeableConcept";
import type { Range } from "./Range";

export type ObservationDefinition_qualifiedInterval = {
  /**
   * Applicable age range, if relevant
   */
  age?: Range;
  /**
   * Targetted population of the range
   */
  appliesTo?: Array<CodeableConcept>;
  /**
   * reference | critical | absolute
   */
  category?: string;
  /**
   * Condition associated with the reference range
   */
  condition?: string;
  /**
   * Range context qualifier
   */
  context?: CodeableConcept;
  /**
   * male | female | other | unknown
   */
  gender?: string;
  /**
   * Applicable gestational age range, if relevant
   */
  gestationalAge?: Range;
  /**
   * Unique id for inter-element referencing
   */
  id: string;
  /**
   * The interval itself, for continuous or ordinal observations
   */
  range?: Range;
};
