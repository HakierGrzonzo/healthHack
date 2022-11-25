/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from './CodeableConcept';
import type { Quantity } from './Quantity';
import type { Range } from './Range';

export type Observation_referenceRange = {
    /**
     * Applicable age range, if relevant
     */
    age?: Range;
    /**
     * Reference range population
     */
    appliesTo?: Array<CodeableConcept>;
    /**
     * High Range, if relevant
     */
    high?: Quantity;
    /**
     * Unique id for inter-element referencing
     */
    id: string;
    /**
     * Low Range, if relevant
     */
    low?: Quantity;
    /**
     * Text based reference range in an observation
     */
    text?: string;
    /**
     * Reference range qualifier
     */
    type?: CodeableConcept;
};

