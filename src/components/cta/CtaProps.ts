/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Headline for the Component element
 */
export type ComponentHeadline = string;
/**
 * Subheadline below the component headline
 */
export type ComponentSubheadline = string;
/**
 * Info text for the component element
 */
export type ComponentText = string;
/**
 * Visually highlight the text
 */
export type HighlightText = boolean;
/**
 * Text content to display inside the button
 */
export type Label = string;
/**
 * Choose an icon
 */
export type Icon = string;
/**
 * Target that should be linked, makes the button behave like a link semantically
 */
export type Target = string;
/**
 * Choose the alginment of the text
 */
export type TextAlignment = "left" | "center";

export interface CtaProps {
  headline?: ComponentHeadline;
  sub?: ComponentSubheadline;
  text?: ComponentText;
  highlightText?: HighlightText;
  buttons?: Button[];
  textAlign?: TextAlignment;
}
export interface Button {
  label?: Label;
  icon?: Icon;
  target?: Target;
}
