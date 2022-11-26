/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Duration } from "./Duration";
import type { Period } from "./Period";

export type DataRequirement_dateFilter = {
  id: string;
  /**
   * A date-valued attribute to filter on
   */
  path?: string;
  /**
   * A date valued parameter to search on
   */
  searchParam?: string;
  value?: any;
  valueDateTime?: string;
  valueDuration?: Duration;
  valuePeriod?: Period;
};
