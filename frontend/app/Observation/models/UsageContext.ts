/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from './CodeableConcept';
import type { Coding } from './Coding';
import type { Quantity } from './Quantity';
import type { Range } from './Range';
import type { Reference } from './Reference';

export type UsageContext = {
    /**
     * Type of context being specified
     */
    code?: Coding;
    id: string;
    value?: any;
    valueCodeableConcept?: CodeableConcept;
    valueQuantity?: Quantity;
    valueRange?: Range;
    valueReference?: Reference;
};

