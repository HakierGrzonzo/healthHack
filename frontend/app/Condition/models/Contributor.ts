/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactDetail } from "./ContactDetail";

export type Contributor = {
  /**
   * Contact details of the contributor
   */
  contact?: Array<ContactDetail>;
  id: string;
  /**
   * Who contributed the content
   */
  name?: string;
  /**
   * author | editor | reviewer | endorser
   */
  type?: string;
};
