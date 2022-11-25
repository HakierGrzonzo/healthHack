/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataRequirement } from './DataRequirement';
import type { Expression } from './Expression';
import type { Reference } from './Reference';
import type { Timing } from './Timing';

export type TriggerDefinition = {
    /**
     * Whether the event triggers (boolean expression)
     */
    condition?: Expression;
    /**
     * Triggering data of the event (multiple = 'and')
     */
    data?: Array<DataRequirement>;
    id: string;
    /**
     * Name or URI that identifies the event
     */
    name?: string;
    timing?: any;
    timingDate?: string;
    timingDateTime?: string;
    timingReference?: Reference;
    timingTiming?: Timing;
    /**
     * named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended
     */
    type?: string;
};

