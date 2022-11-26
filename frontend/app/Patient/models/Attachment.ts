/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Attachment = {
  /**
   * Mime type of the content, with charset etc.
   */
  contentType?: string;
  /**
   * Date attachment was first created
   */
  creation?: string;
  /**
   * Data inline, base64ed
   */
  data?: string;
  /**
   * Hash of the data (sha-1, base64ed)
   */
  hash?: string;
  id: string;
  /**
   * Human language of the content (BCP-47)
   */
  language?: string;
  /**
   * Number of bytes of content (if url provided)
   */
  size?: number;
  /**
   * Label to display in place of the data
   */
  title?: string;
  /**
   * Uri where the data can be found
   */
  url?: string;
};
