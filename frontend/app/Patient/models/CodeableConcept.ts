/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coding } from './Coding';

export type CodeableConcept = {
    /**
     * Code defined by a terminology system
     */
    coding?: Array<Coding>;
    id: string;
    /**
     * Plain text representation of the concept
     */
    text?: string;
};

