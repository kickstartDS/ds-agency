declare module "@kickstartds/base/lib/button/typing" {
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
 * Variant of button to be used
 */
export type Variant = "primary" | "secondary" | "tertiary";
/**
 * Choose an icon
 */
export type Icon = string;
/**
 * Size of button to use
 */
export type Size = "small" | "medium" | "large";
/**
 * Whether the button should be disabled
 */
export type Disabled = boolean;

/**
 * Component used for user interaction
 */
export interface ButtonProps {
  label: Label;
  target?: Target;
  variant?: Variant;
  icon?: Icon;
  size?: Size;
  disabled?: Disabled;
}

}
      