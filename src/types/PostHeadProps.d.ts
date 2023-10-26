declare module "@kickstartds/blog/lib/post-head/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {PictureProps} from "@kickstartds/base/lib/picture/typing";
import type {HeadlineProps} from "@kickstartds/base/lib/headline/typing";
import type {TagLabelProps} from "@kickstartds/base/lib/tag-label/typing";

/**
 * Choose an horizontal alignment for the image.
 */
export type Alignment = "left" | "center" | "right";
/**
 * Date for news item
 */
export type Date = string;
export type Categories = TagLabelProps[];
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

/**
 * Post Head
 */
export interface PostHeadProps {
  image?: {
    src?: string;
    width?: number;
    height?: number;
  } & PictureProps;
  imageAlignment?: Alignment;
  date?: Date;
  headline?: {
    content?: string;
    level?: string;
    spaceAfter?: string;
  } & HeadlineProps;
  categories?: Categories;
  className?: Class;
  component?: KsComponentAttribute;
}

}
      