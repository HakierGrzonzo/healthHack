/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Meta } from "./Meta";

/**
 * Base Resource
 */
export type Resource = {
  /**
   * Logical id of this artifact
   */
  id: string;
  /**
   * A set of rules under which this content was created
   */
  implicitRules?: string;
  /**
   * Language of the resource content
   */
  language?: string;
  /**
   * Metadata about the resource
   */
  meta?: Meta;
};
