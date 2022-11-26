/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Meta } from "./Meta";
import type { Narrative } from "./Narrative";
import type { ObservationDefinition_qualifiedInterval } from "./ObservationDefinition_qualifiedInterval";
import type { ObservationDefinition_quantitativeDetails } from "./ObservationDefinition_quantitativeDetails";
import type { Reference } from "./Reference";
import type { Resource } from "./Resource";

/**
 * Definition of an observation
 */
export type ObservationDefinition = {
  /**
   * Value set of abnormal coded values for the observations conforming to this ObservationDefinition
   */
  abnormalCodedValueSet?: Reference;
  /**
   * Category of observation
   */
  category?: Array<CodeableConcept>;
  /**
   * Type of observation (code / type)
   */
  code?: CodeableConcept;
  /**
   * Contained, inline Resources
   */
  contained?: Array<Resource>;
  /**
   * Value set of critical coded values for the observations conforming to this ObservationDefinition
   */
  criticalCodedValueSet?: Reference;
  /**
   * Logical id of this artifact
   */
  id: string;
  /**
   * Business identifier for this ObservationDefinition instance
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
   * Method used to produce the observation
   */
  method?: CodeableConcept;
  /**
   * Multiple results allowed
   */
  multipleResultsAllowed?: boolean;
  /**
   * Value set of normal coded values for the observations conforming to this ObservationDefinition
   */
  normalCodedValueSet?: Reference;
  /**
   * Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period
   */
  permittedDataType?: string;
  /**
   * Preferred report name
   */
  preferredReportName?: string;
  /**
   * Qualified range for continuous and ordinal observation results
   */
  qualifiedInterval?: Array<ObservationDefinition_qualifiedInterval>;
  /**
   * Characteristics of quantitative results
   */
  quantitativeDetails?: ObservationDefinition_quantitativeDetails;
  /**
   * Text summary of the resource, for human interpretation
   */
  text?: Narrative;
  /**
   * Value set of valid coded values for the observations conforming to this ObservationDefinition
   */
  validCodedValueSet?: Reference;
};
