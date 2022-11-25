/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Quantity } from './Quantity';

export type SampledData = {
    /**
     * Decimal values with spaces, or "E" | "U" | "L"
     */
    data?: string;
    /**
     * Number of sample points at each time point
     */
    dimensions?: number;
    /**
     * Multiply data by this before adding to origin
     */
    factor?: number;
    id: string;
    /**
     * Lower limit of detection
     */
    lowerLimit?: number;
    /**
     * Zero value and units
     */
    origin?: Quantity;
    /**
     * Number of milliseconds between samples
     */
    period?: number;
    /**
     * Upper limit of detection
     */
    upperLimit?: number;
};

