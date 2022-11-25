/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { Attachment } from './Attachment';
import type { CodeableConcept } from './CodeableConcept';
import type { ContactPoint } from './ContactPoint';
import type { HumanName } from './HumanName';
import type { Identifier } from './Identifier';
import type { Meta } from './Meta';
import type { Narrative } from './Narrative';
import type { Patient_communication } from './Patient_communication';
import type { Patient_contact } from './Patient_contact';
import type { Patient_link } from './Patient_link';
import type { Reference } from './Reference';
import type { Resource } from './Resource';

/**
 * Information about an individual or animal receiving health care services
 */
export type Patient = {
    /**
     * Whether this patient's record is in active use
     */
    active?: boolean;
    /**
     * An address for the individual
     */
    address?: Array<Address>;
    /**
     * The date of birth for the individual
     */
    birthDate?: string;
    /**
     * A language which may be used to communicate with the patient about his or her health
     */
    communication?: Array<Patient_communication>;
    /**
     * A contact party (e.g. guardian, partner, friend) for the patient
     */
    contact?: Array<Patient_contact>;
    /**
     * Contained, inline Resources
     */
    contained?: Array<Resource>;
    deceased?: any;
    deceasedBoolean?: boolean;
    deceasedDateTime?: string;
    /**
     * male | female | other | unknown
     */
    gender?: string;
    /**
     * Patient's nominated primary care provider
     */
    generalPractitioner?: Array<Reference>;
    /**
     * Logical id of this artifact
     */
    id: string;
    /**
     * An identifier for this patient
     */
    identifier?: Array<Identifier>;
    /**
     * A set of rules under which this content was created
     */
    implicitRules?: string;
    /**
     * Language of the resource content
     */
    language?: string;
    /**
     * Link to another patient resource that concerns the same actual person
     */
    link?: Array<Patient_link>;
    /**
     * Organization that is the custodian of the patient record
     */
    managingOrganization?: Reference;
    /**
     * Marital (civil) status of a patient
     */
    maritalStatus?: CodeableConcept;
    /**
     * Metadata about the resource
     */
    meta?: Meta;
    multipleBirth?: any;
    multipleBirthBoolean?: boolean;
    multipleBirthInteger?: number;
    /**
     * A name associated with the patient
     */
    name?: Array<HumanName>;
    /**
     * Image of the patient
     */
    photo?: Array<Attachment>;
    /**
     * A contact detail for the individual
     */
    telecom?: Array<ContactPoint>;
    /**
     * Text summary of the resource, for human interpretation
     */
    text?: Narrative;
};

