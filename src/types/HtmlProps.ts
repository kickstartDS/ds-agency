declare module "@kickstartds/base/lib/html/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type HTMLString = string;
/**
 * Add additional css classes that should be applied to the element
 */
export type AdditionalClasses = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

/**
 * Display raw HTML.
 */
export interface HTMLProps {
  html?: HTMLString;
  className?: AdditionalClasses;
  component?: KsComponentAttribute;
}

}
    