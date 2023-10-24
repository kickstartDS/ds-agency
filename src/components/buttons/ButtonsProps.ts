/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Text content to display inside the button
 */
export type Label = string;
/**
 * Target that should be linked, makes the button behave like a link semantically
 */
export type Target = string;
/**
 * Choose an icon
 */
export type Icon = string;
/**
 * Add a Button group
 */
export type ButtonsProps = {
  label: Label;
  target: Target;
  icon?: Icon;
}[];
