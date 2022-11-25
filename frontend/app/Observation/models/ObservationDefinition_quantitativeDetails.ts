/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeableConcept } from './CodeableConcept';

export type ObservationDefinition_quantitativeDetails = {
    /**
     * SI to Customary unit conversion factor
     */
    conversionFactor?: number;
    /**
     * Customary unit for quantitative results
     */
    customaryUnit?: CodeableConcept;
    /**
     * Decimal precision of observation quantitative results
     */
    decimalPrecision?: number;
    /**
     * Unique id for inter-element referencing
     */
    id: string;
    /**
     * SI unit for quantitative results
     */
    unit?: CodeableConcept;
};

