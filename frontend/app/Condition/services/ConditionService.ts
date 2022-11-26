/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Condition } from "../models/Condition";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class ConditionService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public postCondition(requestBody?: Condition): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/Condition",
      body: requestBody,
      mediaType: "application/fhir+json",
    });
  }

  /**
   * @param abatementAge Abatement as age or age range
   * @param abatementDate Date-related abatements (dateTime and period)
   * @param abatementString Abatement as a string
   * @param asserter Source of the information about the allergy
   * @param bodySite Anatomical location, if relevant
   * @param category product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment
   * @param clinicalStatus active | inactive | resolved
   * @param code Code for the condition
   * @param encounter Encounter created as part of
   * @param evidence Manifestation/symptom
   * @param evidenceDetail Supporting information found elsewhere
   * @param identifier Account number
   * @param onsetAge Onsets as age or age range
   * @param onsetDate Date related onsets (dateTime and Period)
   * @param onsetInfo Onsets as a string
   * @param patient The entity that caused the expenses
   * @param recordedDate Date record was first recorded
   * @param severity mild | moderate | severe
   * @param stage Simple summary (disease specific)
   * @param subject The entity that caused the expenses
   * @param verificationStatus unconfirmed | confirmed | refuted | entered-in-error
   * @param format
   * @returns Condition Success
   * @throws ApiError
   */
  public getCondition(
    abatementAge?: number,
    abatementDate?: string,
    abatementString?: string,
    asserter?: string,
    bodySite?: string,
    category?: string,
    clinicalStatus?: string,
    code?: string,
    encounter?: string,
    evidence?: string,
    evidenceDetail?: string,
    identifier?: string,
    onsetAge?: number,
    onsetDate?: string,
    onsetInfo?: string,
    patient?: string,
    recordedDate?: string,
    severity?: string,
    stage?: string,
    subject?: string,
    verificationStatus?: string,
    format?: string
  ): CancelablePromise<Array<Condition>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/Condition",
      query: {
        "abatement-age": abatementAge,
        "abatement-date": abatementDate,
        "abatement-string": abatementString,
        asserter: asserter,
        "body-site": bodySite,
        category: category,
        "clinical-status": clinicalStatus,
        code: code,
        encounter: encounter,
        evidence: evidence,
        "evidence-detail": evidenceDetail,
        identifier: identifier,
        "onset-age": onsetAge,
        "onset-date": onsetDate,
        "onset-info": onsetInfo,
        patient: patient,
        "recorded-date": recordedDate,
        severity: severity,
        stage: stage,
        subject: subject,
        "verification-status": verificationStatus,
        _format: format,
      },
    });
  }

  /**
   * @param id
   * @returns Condition Success
   * @throws ApiError
   */
  public getCondition1(id: string): CancelablePromise<Condition> {
    return this.httpRequest.request({
      method: "GET",
      url: "/Condition/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public putCondition(
    id: string,
    requestBody?: Condition
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/Condition/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/fhir+json",
    });
  }

  /**
   * @param id
   * @returns any Success
   * @throws ApiError
   */
  public deleteCondition(id: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/Condition/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @param count
   * @param since
   * @returns Condition Success
   * @throws ApiError
   */
  public getConditionHistory(
    id: string,
    count?: string,
    since?: string
  ): CancelablePromise<Array<Condition>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/Condition/{id}/_history",
      path: {
        id: id,
      },
      query: {
        _count: count,
        _since: since,
      },
    });
  }

  /**
   * @param id
   * @param vid
   * @returns Condition Success
   * @throws ApiError
   */
  public getConditionHistory1(
    id: string,
    vid: string
  ): CancelablePromise<Condition> {
    return this.httpRequest.request({
      method: "GET",
      url: "/Condition/{id}/_history/{vid}",
      path: {
        id: id,
        vid: vid,
      },
    });
  }
}
