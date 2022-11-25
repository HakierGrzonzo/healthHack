/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Expression = {
    /**
     * Natural language description of the condition
     */
    description?: string;
    /**
     * Expression in specified language
     */
    expression?: string;
    id: string;
    /**
     * text/cql | text/fhirpath | application/x-fhir-query | etc.
     */
    language?: string;
    /**
     * Short name assigned to expression for reuse
     */
    name?: string;
    /**
     * Where the expression is found
     */
    reference?: string;
};

