/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from './CodeableConcept';
import type { Dosage_doseAndRate } from './Dosage_doseAndRate';
import type { Quantity } from './Quantity';
import type { Ratio } from './Ratio';
import type { Timing } from './Timing';

export type Dosage = {
    additionalInstruction?: Array<CodeableConcept>;
    asNeeded?: any;
    asNeededBoolean?: boolean;
    asNeededCodeableConcept?: CodeableConcept;
    doseAndRate?: Array<Dosage_doseAndRate>;
    id: string;
    maxDosePerAdministration?: Quantity;
    maxDosePerLifetime?: Quantity;
    maxDosePerPeriod?: Ratio;
    method?: CodeableConcept;
    patientInstruction?: string;
    route?: CodeableConcept;
    sequence?: number;
    site?: CodeableConcept;
    text?: string;
    timing?: Timing;
};

