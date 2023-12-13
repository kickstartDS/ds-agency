/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Headline for the visual
 */
export type Headline = string;
/**
 * Subheadline below the module headline
 */
export type ModuleSubheadline = string;
/**
 * Info text for the module element
 */
export type ModuleText = string;
/**
 * Visually highlight the text
 */
export type HighlightText = boolean;
export type Height = "small" | "default" | "fullImage" | "fullScreen";
/**
 * Toggle wether you want your text to be displayed within in box
 */
export type Textbox = boolean;
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
 * Enable grid layer
 */
export type GridLayer = boolean;
/**
 * Background image source for small screens
 */
export type MobileImageSource = string;
/**
 * Background image source for medium screens
 */
export type TabletImageSource = string;
/**
 * Background image source for large screens
 */
export type DesktopImageSource = string;
/**
 * Override for img tag of picture element, if needed
 */
export type OptionalSource = string;
/**
 * Choose to indent the image horizontally on small screens
 */
export type ImageIndent = "none" | "left" | "right";
/**
 * Alt text to display for picture
 */
export type AltText = string;
/**
 * Choose the alginment of the module content
 */
export type ModuleAligment = "center" | "below" | "left" | "right";

export interface HeroProps {
  headline?: Headline;
  sub?: ModuleSubheadline;
  text?: ModuleText;
  highlightText?: HighlightText;
  height?: Height;
  textbox?: Textbox;
  buttons?: Button[];
  overlay?: GridLayer;
  image?: BackgroundImage;
  textPosition?: ModuleAligment;
}
export interface Button {
  label?: Label;
  icon?: Icon;
  target?: Target;
}
/**
 * Sources of background images for different screen sizes
 */
export interface BackgroundImage {
  srcMobile: MobileImageSource;
  srcTablet?: TabletImageSource;
  srcDesktop?: DesktopImageSource;
  src?: OptionalSource;
  indent?: ImageIndent;
  alt?: AltText;
}
