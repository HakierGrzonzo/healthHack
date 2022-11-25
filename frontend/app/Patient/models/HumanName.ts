/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Period } from './Period';

export type HumanName = {
    /**
     * Family name (often called 'Surname')
     */
    family?: string;
    /**
     * Given names (not always 'first'). Includes middle names
     */
    given?: string;
    id: string;
    /**
     * Time period when name was/is in use
     */
    period?: Period;
    /**
     * Parts that come before the name
     */
    prefix?: string;
    /**
     * Parts that come after the name
     */
    suffix?: string;
    /**
     * Text representation of the full name
     */
    text?: string;
    /**
     * usual | official | temp | nickname | anonymous | old | maiden
     */
    use?: string;
};

