declare module "@kickstartds/base/lib/lightbox-image/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ThumbnailSource = string;
export type LightboxImageSource = string;
export type Width = number;
export type Height = number;
export type HoverZoomIcon = boolean;
export type Caption = string;
export type HideCaptionVisually = boolean;
export type GalleryIdentifier = string;
export type ID = string;
export type AdditionalClass = string;
export type AdditionalCaptionClass = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

/**
 * Lightbox Image
 */
export interface LightboxImageProps {
  thumb?: ThumbnailSource;
  image?: LightboxImageSource;
  width?: Width;
  height?: Height;
  zoomIcon?: HoverZoomIcon;
  caption?: Caption;
  hideCaption?: HideCaptionVisually;
  gallery?: GalleryIdentifier;
  id?: ID;
  className?: AdditionalClass;
  captionClassName?: AdditionalCaptionClass;
  component?: KsComponentAttribute;
}

}
      