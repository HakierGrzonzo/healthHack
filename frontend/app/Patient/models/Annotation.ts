/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from "./Reference";

export type Annotation = {
  author?: any;
  authorReference?: Reference;
  authorString?: string;
  id: string;
  /**
   * The annotation  - text content (as markdown)
   */
  text?: string;
  /**
   * When the annotation was made
   */
  time?: string;
};
