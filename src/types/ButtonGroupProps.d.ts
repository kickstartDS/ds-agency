declare module "@kickstartds/base/lib/button-group/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {ButtonProps} from "@kickstartds/base/lib/button/typing";

/**
 * Buttons of the Button Group
 */
export type Buttons = ButtonProps[];
/**
 * Vertical arrangement of the buttons
 */
export type ButtonArrangement = "left" | "center" | "right" | "space-between" | "grow";
/**
 * Add additional css classes that should be applied to the button
 */
export type AdditionalClasses = string;

export interface ButtonGroupProps {
  buttons?: Buttons;
  arrangement?: ButtonArrangement;
  className?: AdditionalClasses;
}

}
      