declare module "@kickstartds/content/lib/logo-tiles/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {PictureProps} from "@kickstartds/base/lib/picture/typing";

export type Logos = PictureProps[];
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

/**
 * Component to list logos or seals
 */
export interface LogoTilesProps {
  logos?: Logos;
  className?: Class;
  component?: KsComponentAttribute;
}

}
      