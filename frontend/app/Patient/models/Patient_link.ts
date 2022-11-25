/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type Patient_link = {
    /**
     * Unique id for inter-element referencing
     */
    id: string;
    /**
     * The other patient or related person resource that the link refers to
     */
    other?: Reference;
    /**
     * replaced-by | replaces | refer | seealso
     */
    type?: string;
};

