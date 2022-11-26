/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from "./CodeableConcept";
import type { Quantity } from "./Quantity";
import type { Range } from "./Range";
import type { Ratio } from "./Ratio";

export type Dosage_doseAndRate = {
  dose?: any;
  doseQuantity?: Quantity;
  doseRange?: Range;
  id: string;
  rate?: any;
  rateQuantity?: Quantity;
  rateRange?: Range;
  rateRatio?: Ratio;
  /**
   * The kind of dose or rate specified
   */
  type?: CodeableConcept;
};
