/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { CodeableConcept } from './CodeableConcept';
import type { ContactPoint } from './ContactPoint';
import type { HumanName } from './HumanName';
import type { Period } from './Period';
import type { Reference } from './Reference';

export type Patient_contact = {
    /**
     * Address for the contact person
     */
    address?: Address;
    /**
     * male | female | other | unknown
     */
    gender?: string;
    /**
     * Unique id for inter-element referencing
     */
    id: string;
    /**
     * A name associated with the contact person
     */
    name?: HumanName;
    /**
     * Organization that is associated with the contact
     */
    organization?: Reference;
    /**
     * The period during which this contact person or organization is valid to be contacted relating to this patient
     */
    period?: Period;
    /**
     * The kind of relationship
     */
    relationship?: Array<CodeableConcept>;
    /**
     * A contact detail for the person
     */
    telecom?: Array<ContactPoint>;
};

