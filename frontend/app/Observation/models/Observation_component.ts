/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from "./CodeableConcept";
import type { Observation_referenceRange } from "./Observation_referenceRange";
import type { Period } from "./Period";
import type { Quantity } from "./Quantity";
import type { Range } from "./Range";
import type { Ratio } from "./Ratio";
import type { SampledData } from "./SampledData";

export type Observation_component = {
  /**
   * Type of component observation (code / type)
   */
  code?: CodeableConcept;
  /**
   * Why the component result is missing
   */
  dataAbsentReason?: CodeableConcept;
  /**
   * Unique id for inter-element referencing
   */
  id: string;
  /**
   * High, low, normal, etc.
   */
  interpretation?: Array<CodeableConcept>;
  /**
   * Provides guide for interpretation of component result
   */
  referenceRange?: Array<Observation_referenceRange>;
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
