/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coding } from './Coding';

export type Meta = {
    id: string;
    /**
     * When the resource version last changed
     */
    lastUpdated?: string;
    /**
     * Profiles this resource claims to conform to
     */
    profile?: string;
    /**
     * Security Labels applied to this resource
     */
    security?: Array<Coding>;
    /**
     * Identifies where the resource comes from
     */
    source?: string;
    /**
     * Tags applied to this resource
     */
    tag?: Array<Coding>;
    /**
     * Version specific identifier
     */
    versionId?: string;
};

