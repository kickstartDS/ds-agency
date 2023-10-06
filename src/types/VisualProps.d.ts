declare module "@kickstartds/content/lib/visual/typing" {
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
 * Toggle wether the CTA is displayed or not
 */
export type CTAToggle = boolean;
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
 * Toggle wether the CTA is displayed or not
 */
export type CTAToggle1 = boolean;
/**
 * Choose a media type between image, video and none
 */
export type MediaType = "image" | "video" | "none";
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
 * Background video source for small screens
 */
export type MobileVideoSource = string;
/**
 * Background video source for medium screens
 */
export type TabletVideoSource = string;
/**
 * Background video source for large screens
 */
export type DesktopVideoSource = string;
/**
 * Choose the alginment of the module content
 */
export type ModuleAligment = "left" | "center" | "right";

export interface VisualProps {
  headline?: Headline;
  sub?: ModuleSubheadline;
  text?: ModuleText;
  primaryCta?: {
    toggle?: CTAToggle;
    label?: Label;
    target?: Target;
    icon?: Icon;
  };
  secondaryCta?: {
    toggle?: CTAToggle1;
    label?: Label;
    target?: Target;
    icon?: Icon;
  };
  media?: MediaWrapper;
  align?: ModuleAligment;
}
/**
 * Wrapper for all media types
 */
export interface MediaWrapper {
  mode?: MediaType;
  image?: BackgroundImage;
  video?: BackgroundVideo;
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
/**
 * Sources of background videos for different screen sizes
 */
export interface BackgroundVideo {
  srcMobile: MobileVideoSource;
  srcTablet?: TabletVideoSource;
  srcDesktop?: DesktopVideoSource;
}

}
      