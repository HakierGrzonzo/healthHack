/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coding } from './Coding';

export type DataRequirement_codeFilter = {
    /**
     * What code is expected
     */
    code?: Array<Coding>;
    id: string;
    /**
     * A code-valued attribute to filter on
     */
    path?: string;
    /**
     * A coded (token) parameter to search on
     */
    searchParam?: string;
    /**
     * Valueset for the filter
     */
    valueSet?: string;
};

