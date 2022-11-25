/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Quantity } from './Quantity';

export type Range = {
    /**
     * High limit
     */
    high?: Quantity;
    id: string;
    /**
     * Low limit
     */
    low?: Quantity;
};

