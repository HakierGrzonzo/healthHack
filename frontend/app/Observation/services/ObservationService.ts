/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Observation } from '../models/Observation';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ObservationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postObservation(
        requestBody?: Observation,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Observation',
            body: requestBody,
            mediaType: 'application/fhir+json',
        });
    }

    /**
     * @param basedOn The service request this appointment is allocated to assess
     * @param category product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment
     * @param code The code of the observation type
     * @param codeValueConcept Code and coded value parameter pair
     * @param codeValueDate Code and date/time value parameter pair
     * @param codeValueQuantity Code and quantity value parameter pair
     * @param codeValueString Code and string value parameter pair
     * @param comboCode The code of the observation type or component type
     * @param comboCodeValueConcept Code and coded value parameter pair, including in components
     * @param comboCodeValueQuantity Code and quantity value parameter pair, including in components
     * @param comboDataAbsentReason The reason why the expected value in the element Observation.value[x] or Observation.component.value[x] is missing.
     * @param comboValueConcept The value or component value of the observation, if the value is a CodeableConcept
     * @param comboValueQuantity The value or component value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)
     * @param componentCode The component code of the observation type
     * @param componentCodeValueConcept Component code and component coded value parameter pair
     * @param componentCodeValueQuantity Component code and component quantity value parameter pair
     * @param componentDataAbsentReason The reason why the expected value in the element Observation.component.value[x] is missing.
     * @param componentValueConcept The value of the component observation, if the value is a CodeableConcept
     * @param componentValueQuantity The value of the component observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)
     * @param dataAbsentReason The reason why the expected value in the element Observation.value[x] is missing.
     * @param date The activity definition publication date
     * @param derivedFrom What resource is being referenced
     * @param device Reference to resource that is being requested/ordered
     * @param encounter Encounter created as part of
     * @param focus A resource that is a permitted focus of the message
     * @param hasMember Related resource that belongs to the Observation group
     * @param identifier Account number
     * @param method The method used for the observation
     * @param partOf Part of referenced CarePlan
     * @param patient The entity that caused the expenses
     * @param performer Matches if the practitioner is listed as a performer in any of the "simple" activities.  (For performers of the detailed activities, chain through the activitydetail search parameter.)
     * @param specimen The specimen details
     * @param status active | inactive | entered-in-error | on-hold | unknown
     * @param subject The entity that caused the expenses
     * @param valueConcept The value of the observation, if the value is a CodeableConcept
     * @param valueDate The value of the observation, if the value is a date or period of time
     * @param valueQuantity The value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)
     * @param valueString The value of the observation, if the value is a string, and also searches in CodeableConcept.text
     * @param format
     * @returns Observation Success
     * @throws ApiError
     */
    public getObservation(
        basedOn?: string,
        category?: string,
        code?: string,
        codeValueConcept?: string,
        codeValueDate?: string,
        codeValueQuantity?: string,
        codeValueString?: string,
        comboCode?: string,
        comboCodeValueConcept?: string,
        comboCodeValueQuantity?: string,
        comboDataAbsentReason?: string,
        comboValueConcept?: string,
        comboValueQuantity?: number,
        componentCode?: string,
        componentCodeValueConcept?: string,
        componentCodeValueQuantity?: string,
        componentDataAbsentReason?: string,
        componentValueConcept?: string,
        componentValueQuantity?: number,
        dataAbsentReason?: string,
        date?: string,
        derivedFrom?: string,
        device?: string,
        encounter?: string,
        focus?: string,
        hasMember?: string,
        identifier?: string,
        method?: string,
        partOf?: string,
        patient?: string,
        performer?: string,
        specimen?: string,
        status?: string,
        subject?: string,
        valueConcept?: string,
        valueDate?: string,
        valueQuantity?: number,
        valueString?: string,
        format?: string,
    ): CancelablePromise<Array<Observation>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Observation',
            query: {
                'based-on': basedOn,
                'category': category,
                'code': code,
                'code-value-concept': codeValueConcept,
                'code-value-date': codeValueDate,
                'code-value-quantity': codeValueQuantity,
                'code-value-string': codeValueString,
                'combo-code': comboCode,
                'combo-code-value-concept': comboCodeValueConcept,
                'combo-code-value-quantity': comboCodeValueQuantity,
                'combo-data-absent-reason': comboDataAbsentReason,
                'combo-value-concept': comboValueConcept,
                'combo-value-quantity': comboValueQuantity,
                'component-code': componentCode,
                'component-code-value-concept': componentCodeValueConcept,
                'component-code-value-quantity': componentCodeValueQuantity,
                'component-data-absent-reason': componentDataAbsentReason,
                'component-value-concept': componentValueConcept,
                'component-value-quantity': componentValueQuantity,
                'data-absent-reason': dataAbsentReason,
                'date': date,
                'derived-from': derivedFrom,
                'device': device,
                'encounter': encounter,
                'focus': focus,
                'has-member': hasMember,
                'identifier': identifier,
                'method': method,
                'part-of': partOf,
                'patient': patient,
                'performer': performer,
                'specimen': specimen,
                'status': status,
                'subject': subject,
                'value-concept': valueConcept,
                'value-date': valueDate,
                'value-quantity': valueQuantity,
                'value-string': valueString,
                '_format': format,
            },
        });
    }

    /**
     * @param id
     * @returns Observation Success
     * @throws ApiError
     */
    public getObservation1(
        id: string,
    ): CancelablePromise<Observation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Observation/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public putObservation(
        id: string,
        requestBody?: Observation,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/Observation/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/fhir+json',
        });
    }

    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public deleteObservation(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Observation/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param count
     * @param since
     * @returns Observation Success
     * @throws ApiError
     */
    public getObservationHistory(
        id: string,
        count?: string,
        since?: string,
    ): CancelablePromise<Array<Observation>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Observation/{id}/_history',
            path: {
                'id': id,
            },
            query: {
                '_count': count,
                '_since': since,
            },
        });
    }

    /**
     * @param id
     * @param vid
     * @returns Observation Success
     * @throws ApiError
     */
    public getObservationHistory1(
        id: string,
        vid: string,
    ): CancelablePromise<Observation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Observation/{id}/_history/{vid}',
            path: {
                'id': id,
                'vid': vid,
            },
        });
    }

}
