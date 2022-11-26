/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from "./Attachment";

export type RelatedArtifact = {
  /**
   * Bibliographic citation for the artifact
   */
  citation?: string;
  /**
   * Brief description of the related artifact
   */
  display?: string;
  /**
   * What document is being referenced
   */
  document?: Attachment;
  id: string;
  /**
   * Short label
   */
  label?: string;
  /**
   * What resource is being referenced
   */
  resource?: string;
  /**
   * documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of
   */
  type?: string;
  /**
   * Where the artifact can be accessed
   */
  url?: string;
};
