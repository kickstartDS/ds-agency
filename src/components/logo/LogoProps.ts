/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Picture source
 */
export type Source = string;
/**
 * Picture source
 */
export type Source1 = string;
/**
 * Alt text to display for picture
 */
export type AltText = string;
/**
 * Toggle wether the inverted or default version of the logo is being displayed
 */
export type Inverted = boolean;
/**
 * Width of the picture
 */
export type Width = number;
/**
 * Height of the picture
 */
export type Height = number;
/**
 * Add additional css classes that should be applied to the logo
 */
export type AdditionalClasses = string;

export interface LogoProps {
  src?: Source;
  srcInverted?: Source1;
  alt?: AltText;
  homepageHref?: string;
  inverted?: Inverted;
  width?: Width;
  height?: Height;
  className?: AdditionalClasses;
}
