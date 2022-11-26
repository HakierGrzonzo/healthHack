/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "./core/BaseHttpRequest";
import type { OpenAPIConfig } from "./core/OpenAPI";
import { FetchHttpRequest } from "./core/FetchHttpRequest";

import { ConditionService } from "./services/ConditionService";

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ConditionClient {
  public readonly condition: ConditionService;

  public readonly request: BaseHttpRequest;

  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = FetchHttpRequest
  ) {
    this.request = new HttpRequest({
      BASE:
        config?.BASE ??
        "https://fhir.a4n2wk6cix6v.static-test-account.isccloud.io",
      VERSION: config?.VERSION ?? "r4",
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? "include",
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.condition = new ConditionService(this.request);
  }
}
