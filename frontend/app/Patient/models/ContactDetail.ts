/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactPoint } from './ContactPoint';

export type ContactDetail = {
    id: string;
    /**
     * Name of an individual to contact
     */
    name?: string;
    /**
     * Contact details for individual or organization
     */
    telecom?: Array<ContactPoint>;
};

