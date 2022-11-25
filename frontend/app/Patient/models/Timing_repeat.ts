/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Duration } from './Duration';
import type { Period } from './Period';
import type { Range } from './Range';

export type Timing_repeat = {
    bounds?: any;
    boundsDuration?: Duration;
    boundsPeriod?: Period;
    boundsRange?: Range;
    /**
     * Number of times to repeat
     */
    count?: number;
    /**
     * Maximum number of times to repeat
     */
    countMax?: number;
    /**
     * mon | tue | wed | thu | fri | sat | sun
     */
    dayOfWeek?: string;
    /**
     * How long when it happens
     */
    duration?: number;
    /**
     * How long when it happens (Max)
     */
    durationMax?: number;
    /**
     * s | min | h | d | wk | mo | a - unit of time (UCUM)
     */
    durationUnit?: string;
    /**
     * Event occurs frequency times per period
     */
    frequency?: number;
    /**
     * Event occurs up to frequencyMax times per period
     */
    frequencyMax?: number;
    id: string;
    /**
     * Minutes from event (before or after)
     */
    offset?: number;
    /**
     * Event occurs frequency times per period
     */
    period?: number;
    /**
     * Upper limit of period (3-4 hours)
     */
    periodMax?: number;
    /**
     * s | min | h | d | wk | mo | a - unit of time (UCUM)
     */
    periodUnit?: string;
    /**
     * Time of day for action
     */
    timeOfDay?: string;
    /**
     * Code for time period of occurrence
     */
    when?: string;
};

