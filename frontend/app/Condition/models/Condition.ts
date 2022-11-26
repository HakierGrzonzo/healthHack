/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Age } from "./Age";
import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition_evidence } from "./Condition_evidence";
import type { Condition_stage } from "./Condition_stage";
import type { Identifier } from "./Identifier";
import type { Meta } from "./Meta";
import type { Narrative } from "./Narrative";
import type { Period } from "./Period";
import type { Range } from "./Range";
import type { Reference } from "./Reference";
import type { Resource } from "./Resource";

/**
 * Detailed information about conditions, problems or diagnoses
 */
export type Condition = {
  abatement?: any;
  abatementAge?: Age;
  abatementDateTime?: string;
  abatementPeriod?: Period;
  abatementRange?: Range;
  abatementString?: string;
  /**
   * Person who asserts this condition
   */
  asserter?: Reference;
  /**
   * Anatomical location, if relevant
   */
  bodySite?: Array<CodeableConcept>;
  /**
   * problem-list-item | encounter-diagnosis
   */
  category?: Array<CodeableConcept>;
  /**
   * active | recurrence | relapse | inactive | remission | resolved
   */
  clinicalStatus?: CodeableConcept;
  /**
   * Identification of the condition, problem or diagnosis
   */
  code?: CodeableConcept;
  /**
   * Contained, inline Resources
   */
  contained?: Array<Resource>;
  /**
   * Encounter created as part of
   */
  encounter?: Reference;
  /**
   * Supporting evidence
   */
  evidence?: Array<Condition_evidence>;
  /**
   * Logical id of this artifact
   */
  id: string;
  /**
   * External Ids for this condition
   */
  identifier?: Array<Identifier>;
  /**
   * A set of rules under which this content was created
   */
  implicitRules?: string;
  /**
   * Language of the resource content
   */
  language?: string;
  /**
   * Metadata about the resource
   */
  meta?: Meta;
  /**
   * Additional information about the Condition
   */
  note?: Array<Annotation>;
  onset?: any;
  onsetAge?: Age;
  onsetDateTime?: string;
  onsetPeriod?: Period;
  onsetRange?: Range;
  onsetString?: string;
  /**
   * Date record was first recorded
   */
  recordedDate?: string;
  /**
   * Who recorded the condition
   */
  recorder?: Reference;
  /**
   * Subjective severity of condition
   */
  severity?: CodeableConcept;
  /**
   * Stage/grade, usually assessed formally
   */
  stage?: Array<Condition_stage>;
  /**
   * Who has the condition?
   */
  subject?: Reference;
  /**
   * Text summary of the resource, for human interpretation
   */
  text?: Narrative;
  /**
   * unconfirmed | provisional | differential | confirmed | refuted | entered-in-error
   */
  verificationStatus?: CodeableConcept;
};
