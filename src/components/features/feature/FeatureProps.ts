/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The icon for the feature
 */
export type Icon = string;
/**
 * The title of the feature
 */
export type Title = string;
/**
 * The description of the feature
 */
export type Text = string;
/**
 * The CTA target
 */
export type CallToActionTarget = string;
/**
 * The text label displayed on the link
 */
export type LinkLabel = string;
/**
 * Activate/disable the CTAs
 */
export type CallToActionToggle = boolean;

/**
 * Partial Component used to display a feature
 */
export interface FeatureProps {
  icon?: Icon;
  title: Title;
  text: Text;
  style?: "intext" | "stack" | "centered" | "besideLarge" | "besideSmall";
  ctaTarget?: CallToActionTarget;
  ctaLabel?: LinkLabel;
  ctaToggle?: CallToActionToggle;
  /**
   * Choose the style of the CTA
   */
  ctaStyle?: "button" | "link" | "intext";
}
