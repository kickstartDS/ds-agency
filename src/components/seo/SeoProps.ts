/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Title used for the page
 */
export type Title = string;
/**
 * Description used for the page
 */
export type Description = string;
/**
 * Keywords used for the page
 */
export type Keywords = string;
/**
 * Preview image used for the page
 */
export type PreviewImage = string;
/**
 * Card preview image (larger, e.g. Twitter) used for the page
 */
export type CardPreviewImage = string;

/**
 * Abstracts SEO settings for a website into JSON schema
 */
export interface SeoProps {
  title: Title;
  description?: Description;
  keywords?: Keywords;
  image?: PreviewImage;
  cardImage?: CardPreviewImage;
}