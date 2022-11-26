/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Item } from "../models/Item";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class DefaultService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Hello
   * @returns any Successful Response
   * @throws ApiError
   */
  public helloGet(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/",
    });
  }

  /**
   * Predict
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public predictPost(requestBody: Item): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
