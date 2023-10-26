declare module "@kickstartds/base/lib/content-box/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {ButtonProps} from "@kickstartds/base/lib/button/typing";

/**
 * Choose one of the set ratios, all ratios except `none` stretch the image to 100% width
 */
export type ImageRatio = "none" | "4:3" | "16:9" | "1:1";
/**
 * Choose an alignment for the box. For the image it only applies for a `ratio` value of `none`
 */
export type Alignment = "left" | "center" | "right";
/**
 * Select an image to display inside the content box, at the top
 */
export type ImageSource = string;
/**
 * Topic for the content box. Displayed before the text, in bold
 */
export type Topic = string;
/**
 * Text for the content box
 */
export type TextContent = string;
/**
 * Content box link configuration
 */
export type Link = {
  enabled?: DisplayLink;
  [k: string]: unknown;
} & ButtonProps;
/**
 * Toggles visibility of the link
 */
export type DisplayLink = boolean;
/**
 * Add additional css classes that should be applied to the content box
 */
export type AdditionalClasses = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

/**
 * Component to display content in a condensed, boxed form
 */
export interface ContentBoxProps {
  ratio?: ImageRatio;
  alignement?: Alignment;
  image?: ImageSource;
  topic?: Topic;
  text?: TextContent;
  link?: Link;
  className?: AdditionalClasses;
  component?: KsComponentAttribute;
}

}
      