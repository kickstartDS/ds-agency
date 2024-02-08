/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The number of the stat
 */
export type Number = number;
/**
 * Optional description of the stat
 */
export type Description = string;
/**
 * Title of the stat
 */
export type Title = string;

/**
 * Stat entry of Stats component
 */
export interface StatProps {
  number: Number;
  description?: Description;
  title?: Title;
}
