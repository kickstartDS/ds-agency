/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Headline for the teaser card
 */
export type Headline = string;
/**
 * Body text for the teaser card
 */
export type Text = string;
/**
 * Label for the Teaser Card
 */
export type Label = string;
/**
 * Target that should be linked
 */
export type Target = string;
/**
 * Toggle wether you want the card to have a visible button or not
 */
export type DisplayButton = boolean;
/**
 * Image to display as cover
 */
export type Image = string;

/**
 * Component used to tease content
 */
export interface TeaserCardProps {
  headline?: Headline;
  text?: Text;
  label?: Label;
  /**
   * Layout for the Teaser Card
   */
  layout?: "stack" | "row";
  target?: Target;
  displayButton?: DisplayButton;
  image?: Image;
  /**
   * Aspect ratio of the image
   */
  imageRatio?: "wide" | "landscape" | "square" | "unset";
}
