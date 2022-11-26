/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Meta } from "./Meta";
import type { Narrative } from "./Narrative";
import type { Observation_component } from "./Observation_component";
import type { Observation_referenceRange } from "./Observation_referenceRange";
import type { Period } from "./Period";
import type { Quantity } from "./Quantity";
import type { Range } from "./Range";
import type { Ratio } from "./Ratio";
import type { Reference } from "./Reference";
import type { Resource } from "./Resource";
import type { SampledData } from "./SampledData";
import type { Timing } from "./Timing";

/**
 * Measurements and simple assertions
 */
export type Observation = {
  /**
   * Fulfills plan, proposal or order
   */
  basedOn?: Array<Reference>;
  /**
   * Observed body part
   */
  bodySite?: CodeableConcept;
  /**
   * Classification of  type of observation
   */
  category?: Array<CodeableConcept>;
  /**
   * Type of observation (code / type)
   */
  code?: CodeableConcept;
  /**
   * Component results
   */
  component?: Array<Observation_component>;
  /**
   * Contained, inline Resources
   */
  contained?: Array<Resource>;
  /**
   * Why the result is missing
   */
  dataAbsentReason?: CodeableConcept;
  /**
   * Related measurements the observation is made from
   */
  derivedFrom?: Array<Reference>;
  /**
   * (Measurement) Device
   */
  device?: Reference;
  effective?: any;
  effectiveDateTime?: string;
  effectiveInstant?: string;
  effectivePeriod?: Period;
  effectiveTiming?: Timing;
  /**
   * Healthcare event during which this observation is made
   */
  encounter?: Reference;
  /**
   * What the observation is about, when it is not about the subject of record
   */
  focus?: Array<Reference>;
  /**
   * Related resource that belongs to the Observation group
   */
  hasMember?: Array<Reference>;
  /**
   * Logical id of this artifact
   */
  id: string;
  /**
   * Business Identifier for observation
   */
  identifier?: Array<Identifier>;
  /**
   * A set of rules under which this content was created
   */
  implicitRules?: string;
  /**
   * High, low, normal, etc.
   */
  interpretation?: Array<CodeableConcept>;
  /**
   * Date/Time this version was made available
   */
  issued?: string;
  /**
   * Language of the resource content
   */
  language?: string;
  /**
   * Metadata about the resource
   */
  meta?: Meta;
  /**
   * How it was done
   */
  method?: CodeableConcept;
  /**
   * Comments about the observation
   */
  note?: Array<Annotation>;
  /**
   * Part of referenced event
   */
  partOf?: Array<Reference>;
  /**
   * Who is responsible for the observation
   */
  performer?: Array<Reference>;
  /**
   * Provides guide for interpretation
   */
  referenceRange?: Array<Observation_referenceRange>;
  /**
   * Specimen used for this observation
   */
  specimen?: Reference;
  /**
   * registered | preliminary | final | amended +
   */
  status?: string;
  /**
   * Who and/or what the observation is about
   */
  subject?: Reference;
  /**
   * Text summary of the resource, for human interpretation
   */
  text?: Narrative;
  value?: any;
  valueBoolean?: boolean;
  valueCodeableConcept?: CodeableConcept;
  valueDateTime?: string;
  valueInteger?: number;
  valuePeriod?: Period;
  valueQuantity?: Quantity;
  valueRange?: Range;
  valueRatio?: Ratio;
  valueSampledData?: SampledData;
  valueString?: string;
  valueTime?: string;
};
