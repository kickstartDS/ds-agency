declare module "@kickstartds/content/lib/storytelling/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {ButtonProps} from "./ButtonProps";

/**
 * Background image for the whole element
 */
export type BackgroundImage = string;
/**
 * Background color for the whole element
 */
export type BackgroundColor = string;
/**
 * Display a full sized version of the image
 */
export type FullSizeImage = boolean;
/**
 * Image source to use
 */
export type ImageSource = string;
/**
 * Select an aspect ratio to use for cropping and displaying the image
 */
export type ImageAspectRatio = "4:3" | "3:2" | "16:9" | "1:1" | "none";
/**
 * Select a vertical alignment for the image
 */
export type ImageVerticalAlignment = "center" | "top" | "top-edge" | "bottom" | "bottom-edge";
/**
 * Select a horizontal alignment for the image
 */
export type ImageHorizontalAlignment = "center" | "left" | "left-edge" | "right" | "right-edge";
/**
 * Switch to displaying the image after the text on mobile
 */
export type MobileImageAfterText = boolean;
/**
 * Switch to displaying the image after the text on desktop
 */
export type DesktopImageAfterText = boolean;
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
 * Text content to display inside the element
 */
export type Text1 = string;
/**
 * Switch text alignment between left and center
 */
export type TextAlignment = "left" | "center";
/**
 * Overwrite the color to use for the text content
 */
export type TextColor = string;
/**
 * Select a vertical alignment for the box
 */
export type BoxVerticalAlignment = "center" | "top" | "bottom";
/**
 * Select a horizontal alignment for the box
 */
export type BoxHorizontalAlignment = "center" | "left" | "right";
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
export type Inverted = boolean;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute1 = string;

/**
 * Component to present rich combinations of text and media, best used sequentially
 */
export interface StorytellingProps {
  backgroundImage?: BackgroundImage;
  backgroundColor?: BackgroundColor;
  full?: FullSizeImage;
  image?: Image;
  box: TextBox;
  className?: Class;
  inverted?: Inverted;
  component?: KsComponentAttribute1;
}
/**
 * Image displayed alongside the text content
 */
export interface Image {
  source?: ImageSource;
  ratio?: ImageAspectRatio;
  vAlign?: ImageVerticalAlignment;
  hAlign?: ImageHorizontalAlignment;
  order?: Order;
}
/**
 * Choose what comes first on mobile and desktop: image or text
 */
export interface Order {
  mobileImageLast?: MobileImageAfterText;
  desktopImageLast?: DesktopImageAfterText;
}
/**
 * Text content to display
 */
export interface TextBox {
  headline?: Headline;
  text?: Text1;
  textAlign?: TextAlignment;
  textColor?: TextColor;
  vAlign?: BoxVerticalAlignment;
  hAlign?: BoxHorizontalAlignment;
  /**
   * Referenced component Button
   */
  link?: ButtonProps;
}
/**
 * Headline for the box
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

}
    