/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {PictureProps} from "@kickstartds/base/lib/picture/typing";

/**
 * Make the header float over the first Section
 */
export type Floating = boolean;

export interface HeaderProps {
  /**
   * Referenced component PictureProps
   */
  logo: PictureProps;
  logoHref?: string;
  floating?: Floating;
}
