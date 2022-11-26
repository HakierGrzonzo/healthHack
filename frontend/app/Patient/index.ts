/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { PatientClient } from "./PatientClient";

export { ApiError } from "./core/ApiError";
export { BaseHttpRequest } from "./core/BaseHttpRequest";
export { CancelablePromise, CancelError } from "./core/CancelablePromise";
export { OpenAPI } from "./core/OpenAPI";
export type { OpenAPIConfig } from "./core/OpenAPI";

export type { Address } from "./models/Address";
export type { Age } from "./models/Age";
export type { Annotation } from "./models/Annotation";
export type { Attachment } from "./models/Attachment";
export type { CodeableConcept } from "./models/CodeableConcept";
export type { Coding } from "./models/Coding";
export type { ContactDetail } from "./models/ContactDetail";
export type { ContactPoint } from "./models/ContactPoint";
export type { Contributor } from "./models/Contributor";
export type { Count } from "./models/Count";
export type { DataRequirement } from "./models/DataRequirement";
export type { DataRequirement_codeFilter } from "./models/DataRequirement_codeFilter";
export type { DataRequirement_dateFilter } from "./models/DataRequirement_dateFilter";
export type { DataRequirement_sort } from "./models/DataRequirement_sort";
export type { Distance } from "./models/Distance";
export type { Dosage } from "./models/Dosage";
export type { Dosage_doseAndRate } from "./models/Dosage_doseAndRate";
export type { Duration } from "./models/Duration";
export type { Expression } from "./models/Expression";
export type { Extension } from "./models/Extension";
export type { HumanName } from "./models/HumanName";
export type { Identifier } from "./models/Identifier";
export type { Meta } from "./models/Meta";
export type { Money } from "./models/Money";
export type { Narrative } from "./models/Narrative";
export type { ParameterDefinition } from "./models/ParameterDefinition";
export type { Patient } from "./models/Patient";
export type { Patient_communication } from "./models/Patient_communication";
export type { Patient_contact } from "./models/Patient_contact";
export type { Patient_link } from "./models/Patient_link";
export type { Period } from "./models/Period";
export type { Quantity } from "./models/Quantity";
export type { Range } from "./models/Range";
export type { Ratio } from "./models/Ratio";
export type { Reference } from "./models/Reference";
export type { RelatedArtifact } from "./models/RelatedArtifact";
export type { Resource } from "./models/Resource";
export type { SampledData } from "./models/SampledData";
export type { Signature } from "./models/Signature";
export type { Timing } from "./models/Timing";
export type { Timing_repeat } from "./models/Timing_repeat";
export type { TriggerDefinition } from "./models/TriggerDefinition";
export type { UsageContext } from "./models/UsageContext";

export { PatientService } from "./services/PatientService";
