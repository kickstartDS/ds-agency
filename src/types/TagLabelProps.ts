declare module "@kickstartds/base/lib/tag-label/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Text to display inside tag label
 */
export type Label = string;
/**
 * Choose a size to scale the tag label up or down
 */
export type Size = "s" | "m" | "l";
/**
 * Set optional href to link the tag
 */
export type LinkTarget = string;
/**
 * Choose whether the element is removable or not
 */
export type Removable = boolean;
/**
 * Add additional css classes that should be applied to the label
 */
export type AdditionalClasses = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

/**
 * Component to render a pill / tag / label
 */
export interface TagLabelProps {
  label: Label;
  size?: Size;
  link?: LinkTarget;
  removable?: Removable;
  className?: AdditionalClasses;
  component?: KsComponentAttribute;
}

}
    