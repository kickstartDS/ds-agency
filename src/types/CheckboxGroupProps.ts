declare module "@kickstartds/form/lib/checkbox-group/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The label for the element
 */
export type Label = string;
/**
 * The name of the input element, used when submitting an HTML form
 */
export type Name = string;
/**
 * Wheter the input is invalid
 */
export type Invalid = boolean;
/**
 * Message to show if the input is invalid
 */
export type InvalidMessage = string;
/**
 * Whether the input is disabled
 */
export type Disabled = boolean;
/**
 * Help text that gives more context about what a user needs to input
 */
export type HintMessage = string;
export type Options = Checkbox[];
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

/**
 * A CheckboxGroup allows users to select one or more items from a list of choices.
 */
export interface CheckboxGroupProps {
  label: Label;
  name?: Name;
  invalid?: Invalid;
  invalidMessage?: InvalidMessage;
  options?: Options;
  className?: Class;
  component?: KsComponentAttribute;
}
/**
 * Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.
 */
export interface Checkbox {
  label: Label;
  disabled?: Disabled;
  hint?: HintMessage;
  [k: string]: unknown;
}

}
    