/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {ButtonsProps} from "../buttons/ButtonsProps";

/**
 * Headline for the module element
 */
export type ModuleHeadline = string;
/**
 * Make the headline larger
 */
export type LargeHeadline = boolean;
/**
 * Subheadline below the module headline
 */
export type ModuleSubheadline = string;
/**
 * Info text for the module element
 */
export type ModuleText = string;
/**
 * Set the width of the content to the full width of the element
 */
export type Width = boolean;
/**
 * Background color for the whole element
 */
export type BackgroundColor = string;
/**
 * Background image for the whole element
 */
export type BackgroundImage = string;
/**
 * Image source to use
 */
export type ImageSource = string;
/**
 * Select a vertical alignment for the image
 */
export type ImageVerticalAlignment = "center" | "top" | "bottom";
/**
 * Select a horizontal alignment for the image
 */
export type ImageHorizontalAlignment = "center" | "left" | "right";
/**
 * Toggle padding of the image
 */
export type Padding = boolean;
/**
 * Switch to displaying the image after the text on mobile
 */
export type MobileImageAfterText = boolean;
/**
 * Switch to displaying the image after the text on desktop
 */
export type DesktopImageAfterText = boolean;
/**
 * Image description
 */
export type AltText = string;
/**
 * Choose the alginment of the text
 */
export type TextAlignment = "left" | "center";

export interface CtaPaidProps {
  headline?: ModuleHeadline;
  largeHeadline?: LargeHeadline;
  sub?: ModuleSubheadline;
  text?: ModuleText;
  fullWidth?: Width;
  /**
   * Referenced component ButtonsProps
   */
  buttons?: ButtonsProps;
  backgroundColor?: BackgroundColor;
  backgroundImage?: BackgroundImage;
  image?: Image;
  align?: TextAlignment;
}
/**
 * Image displayed alongside the text content
 */
export interface Image {
  src?: ImageSource;
  vAlign?: ImageVerticalAlignment;
  hAlign?: ImageHorizontalAlignment;
  padding?: Padding;
  order?: Order;
  alt?: AltText;
}
/**
 * Choose what comes first on mobile and desktop: image or text
 */
export interface Order {
  mobileImageLast?: MobileImageAfterText;
  desktopImageLast?: DesktopImageAfterText;
}
