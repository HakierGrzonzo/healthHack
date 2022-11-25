/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ParameterDefinition = {
    /**
     * A brief description of the parameter
     */
    documentation?: string;
    id: string;
    /**
     * Maximum cardinality (a number of *)
     */
    max?: string;
    /**
     * Minimum cardinality
     */
    min?: number;
    /**
     * Name used to access the parameter value
     */
    name?: string;
    /**
     * What profile the value is expected to be
     */
    profile?: string;
    /**
     * What type of value
     */
    type?: string;
    /**
     * in | out
     */
    use?: string;
};

