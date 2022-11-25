/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Patient } from '../models/Patient';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PatientService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public postPatient(
        requestBody?: Patient,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Patient',
            body: requestBody,
            mediaType: 'application/fhir+json',
        });
    }

    /**
     * @param active The Healthcare Service is currently marked as active
     * @param address Identifier for the network access point of the user device
     * @param addressCity A city specified in an address
     * @param addressCountry A country specified in an address
     * @param addressPostalcode A postal code specified in an address
     * @param addressState A state specified in an address
     * @param addressUse A use code specified in an address
     * @param birthdate The patient's date of birth
     * @param deathDate The date of death has been provided and satisfies this search value
     * @param deceased This patient has been marked as deceased, or as a death date entered
     * @param email A value in an email contact
     * @param family A portion of the family name of the patient
     * @param gender Gender of the patient
     * @param generalPractitioner Patient's nominated general practitioner, not the organization that manages the record
     * @param given A portion of the given name of the patient
     * @param identifier Account number
     * @param language A language in which a designation is provided
     * @param link All patients linked to the given patient
     * @param name Human-readable label
     * @param organization Custodian of the consent
     * @param phone A value in a phone contact
     * @param phonetic A portion of the organization's name using some kind of phonetic matching algorithm
     * @param telecom Contact details for individual or organization
     * @param format
     * @returns Patient Success
     * @throws ApiError
     */
    public getPatient(
        active?: string,
        address?: string,
        addressCity?: string,
        addressCountry?: string,
        addressPostalcode?: string,
        addressState?: string,
        addressUse?: string,
        birthdate?: string,
        deathDate?: string,
        deceased?: string,
        email?: string,
        family?: string,
        gender?: string,
        generalPractitioner?: string,
        given?: string,
        identifier?: string,
        language?: string,
        link?: string,
        name?: string,
        organization?: string,
        phone?: string,
        phonetic?: string,
        telecom?: string,
        format?: string,
    ): CancelablePromise<Array<Patient>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Patient',
            query: {
                'active': active,
                'address': address,
                'address-city': addressCity,
                'address-country': addressCountry,
                'address-postalcode': addressPostalcode,
                'address-state': addressState,
                'address-use': addressUse,
                'birthdate': birthdate,
                'death-date': deathDate,
                'deceased': deceased,
                'email': email,
                'family': family,
                'gender': gender,
                'general-practitioner': generalPractitioner,
                'given': given,
                'identifier': identifier,
                'language': language,
                'link': link,
                'name': name,
                'organization': organization,
                'phone': phone,
                'phonetic': phonetic,
                'telecom': telecom,
                '_format': format,
            },
        });
    }

    /**
     * @param id
     * @returns Patient Success
     * @throws ApiError
     */
    public getPatient1(
        id: string,
    ): CancelablePromise<Patient> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Patient/{id}',
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
    public putPatient(
        id: string,
        requestBody?: Patient,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/Patient/{id}',
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
    public deletePatient(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Patient/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param count
     * @param since
     * @returns Patient Success
     * @throws ApiError
     */
    public getPatientHistory(
        id: string,
        count?: string,
        since?: string,
    ): CancelablePromise<Array<Patient>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Patient/{id}/_history',
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
     * @returns Patient Success
     * @throws ApiError
     */
    public getPatientHistory1(
        id: string,
        vid: string,
    ): CancelablePromise<Patient> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Patient/{id}/_history/{vid}',
            path: {
                'id': id,
                'vid': vid,
            },
        });
    }

}
