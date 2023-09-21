declare module "@kickstartds/blog/lib/post-share-bar/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Select the headline level to use, or p alternatively
 */
export type Level = "h1" | "h2" | "h3" | "h4" | "h5" | "p";
/**
 * Select the headline style to use
 */
export type Style = "none" | "h1" | "h2" | "h3" | "h4" | "h5" | "p";
/**
 * Choose an alignment for the headline
 */
export type Alignment = "left" | "center" | "right";
/**
 * Text content for the headline
 */
export type Text = string;
/**
 * Text content for the optional subheadline
 */
export type Subheadline = string;
/**
 * Add additional spacing to the bottom of the headline
 */
export type BottomSpacing = "minimum" | "small" | "large";
/**
 * Add additional css classes that should be applied to the headline
 */
export type AdditionalClasses = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;
/**
 * Open link in new Tab
 */
export type OpenLinkInNewTab = boolean;
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute1 = string;

/**
 * Post Share Bar
 */
export interface PostShareBarProps {
  headline?: Headline;
  links?: ShareLink[];
  className?: Class;
  component?: KsComponentAttribute1;
}
/**
 * Headline
 */
export interface Headline {
  level?: Level;
  styleAs?: Style;
  align?: Alignment;
  content: Text;
  subheadline?: Subheadline;
  spaceAfter?: BottomSpacing;
  className?: AdditionalClasses;
  component?: KsComponentAttribute;
}
export interface ShareLink {
  href?: string;
  icon?: string;
  title?: string;
  newTab?: OpenLinkInNewTab;
  [k: string]: unknown;
}

}
    