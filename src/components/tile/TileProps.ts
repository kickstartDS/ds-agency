/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Headline for the tile
 */
export type Headline = string;
/**
 * Subheadline below the tile headline
 */
export type ModuleSubheadline = string;
/**
 * Text for tile
 */
export type ModuleText = string;
/**
 * Picture source
 */
export type Source = string;
/**
 * Alt text to display for picture
 */
export type AltText = string;
/**
 * Toggle wether the Button is displayed or not
 */
export type ButtonToggle = boolean;
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
 * Background color for the whole element
 */
export type BackgroundColor = string;
/**
 * Background image for the whole element
 */
export type BackgroundImage = string;
/**
 * Overwrite the color to use for the text content
 */
export type TextColor = string;

export interface TileProps {
  headline: Headline;
  sub?: ModuleSubheadline;
  text?: ModuleText;
  image: {
    src?: Source;
    alt?: AltText;
  };
  button?: {
    toggle?: ButtonToggle;
    label?: Label;
    target?: Target;
    icon?: Icon;
  };
  backgroundColor?: BackgroundColor;
  backgroundImage?: BackgroundImage;
  textColor?: TextColor;
}