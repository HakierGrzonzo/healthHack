/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from './CodeableConcept';
import type { Timing_repeat } from './Timing_repeat';

export type Timing = {
    code?: CodeableConcept;
    event?: string;
    id: string;
    repeat?: Timing_repeat;
};

