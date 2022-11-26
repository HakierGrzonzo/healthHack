/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Coding = {
  /**
   * Symbol in syntax defined by the system
   */
  code?: string;
  /**
   * Representation defined by the system
   */
  display?: string;
  id: string;
  /**
   * Identity of the terminology system
   */
  system?: string;
  /**
   * If this coding was chosen directly by the user
   */
  userSelected?: boolean;
  /**
   * Version of the system - if relevant
   */
  version?: string;
};
