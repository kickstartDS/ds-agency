/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Headline for the module element
 */
export type ModuleHeadline = string;
/**
 * Subheadline below the module headline
 */
export type ModuleSubheadline = string;
/**
 * Info text for the module element
 */
export type ModuleText = string;
/**
 * Toggle wether the CTA is displayed or not
 */
export type CTAToggle = boolean;
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
 * Toggle wether the CTA is displayed or not
 */
export type CTAToggle1 = boolean;
/**
 * Text content to display inside the button
 */
export type Label1 = string;
/**
 * Target that should be linked, makes the button behave like a link semantically
 */
export type Target1 = string;
/**
 * Choose an icon
 */
export type Icon1 = string;
/**
 * Choose the alginment of the module content
 */
export type ModuleAligment = "left" | "center";

export interface CtaTextProps {
  headline?: ModuleHeadline;
  subheadline?: ModuleSubheadline;
  text?: ModuleText;
  primaryCta?: {
    toggle?: CTAToggle;
    label?: Label;
    target?: Target;
    icon?: Icon;
    [k: string]: unknown;
  };
  secondaryCta?: {
    toggle?: CTAToggle1;
    label?: Label1;
    target?: Target1;
    icon?: Icon1;
    [k: string]: unknown;
  };
  align?: ModuleAligment;
  [k: string]: unknown;
}
