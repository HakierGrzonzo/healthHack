/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Identifier } from "./Identifier";

export type Reference = {
  /**
   * Text alternative for the resource
   */
  display?: string;
  id: string;
  /**
   * Logical reference, when literal reference is not known
   */
  identifier?: Identifier;
  /**
   * Literal reference, Relative, internal or absolute URL
   */
  reference?: string;
  /**
   * Type the reference refers to (e.g. "Patient")
   */
  type?: string;
};
