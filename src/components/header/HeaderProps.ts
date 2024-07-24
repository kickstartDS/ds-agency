/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Logo file source
 */
export type Source = string;
/**
 * Logo inverted file source
 */
export type SourceInverted = string;
/**
 * Alt text to display for picture
 */
export type AltText = string;
/**
 * Width of the picture
 */
export type Width = number;
/**
 * Height of the picture
 */
export type Height = number;
/**
 * Make the header float over the first Section
 */
export type Floating = boolean;
/**
 * Invert the color scheme of the header
 */
export type Inverted = boolean;

export interface HeaderProps {
  logo: Logo;
  logoHref?: string;
  floating?: Floating;
  inverted?: Inverted;
  navItems?: {
    href: string;
    label: string;
    active?: boolean;
  }[];
}
export interface Logo {
  src?: Source;
  srcInverted?: SourceInverted;
  alt?: AltText;
  width?: Width;
  height?: Height;
}
