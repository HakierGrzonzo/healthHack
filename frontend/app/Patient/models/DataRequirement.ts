/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from './CodeableConcept';
import type { DataRequirement_codeFilter } from './DataRequirement_codeFilter';
import type { DataRequirement_dateFilter } from './DataRequirement_dateFilter';
import type { DataRequirement_sort } from './DataRequirement_sort';
import type { Reference } from './Reference';

export type DataRequirement = {
    codeFilter?: Array<DataRequirement_codeFilter>;
    dateFilter?: Array<DataRequirement_dateFilter>;
    id: string;
    /**
     * Number of results
     */
    limit?: number;
    /**
     * Indicates specific structure elements that are referenced by the knowledge module
     */
    mustSupport?: string;
    /**
     * The profile of the required data
     */
    profile?: string;
    sort?: Array<DataRequirement_sort>;
    subject?: any;
    subjectCodeableConcept?: CodeableConcept;
    subjectReference?: Reference;
    /**
     * The type of the required data
     */
    type?: string;
};

