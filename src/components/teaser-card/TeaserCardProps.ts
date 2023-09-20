/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
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
 * Target that should be linked
 */
export type Target = string;
/**
 * Image to display as cover
 */
export type Image = string;
/**
 * Whether to invert the card
 */
export type InvertCard = boolean;

/**
 * Component used to tease content
 */
export interface TeaserCardProps {
  headline: Headline;
  text: Text;
  target?: Target;
  image?: Image;
  inverted?: InvertCard;
}
