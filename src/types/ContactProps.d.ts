declare module "@kickstartds/base/lib/contact/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * URL of the image to display
 */
export type ImageSource = string;
/**
 * Alt text of the image
 */
export type AltText = string;
/**
 * Image uses all the horizontal space vailable
 */
export type FullWidth = boolean;
/**
 * Aspect Ratio of the Images
 */
export type AspectRatio = "wide" | "square" | "vertical";
/**
 * Name, company name, etc.
 */
export type Title = string;
/**
 * Position, profession, department, location, etc.
 */
export type Subtitle = string;
/**
 * Open link in new Tab
 */
export type OpenLinkInNewTab = boolean;
export type CopyText = string;
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

/**
 * Component used for user interaction
 */
export interface ContactProps {
  image?: {
    src?: ImageSource;
    alt?: AltText;
    fullWidth?: FullWidth;
    aspectRatio?: AspectRatio;
  };
  title?: Title;
  subtitle?: Subtitle;
  links?: {
    icon?: string;
    label?: string;
    href?: string;
    newTab?: OpenLinkInNewTab;
  }[];
  copy?: CopyText;
  className?: Class;
  component?: KsComponentAttribute;
}

}
      