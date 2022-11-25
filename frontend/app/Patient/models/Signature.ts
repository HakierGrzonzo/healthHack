/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coding } from './Coding';
import type { Reference } from './Reference';

export type Signature = {
    /**
     * The actual signature content (XML DigSig. JWS, picture, etc.)
     */
    data?: string;
    id: string;
    /**
     * The party represented
     */
    onBehalfOf?: Reference;
    /**
     * The technical format of the signature
     */
    sigFormat?: string;
    /**
     * The technical format of the signed resources
     */
    targetFormat?: string;
    /**
     * Indication of the reason the entity signed the object(s)
     */
    type?: Array<Coding>;
    /**
     * When the signature was created
     */
    when?: string;
    /**
     * Who signed
     */
    who?: Reference;
};

