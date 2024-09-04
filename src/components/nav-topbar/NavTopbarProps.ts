/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Toggle the inversion of the dropdown navigation
 */
export type DropdownInverted = boolean;

export interface NavTopbarProps {
  items?: {
    href: string;
    label: string;
    active?: boolean;
  }[];
  inverted?: DropdownInverted;
}
