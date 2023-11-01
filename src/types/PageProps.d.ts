declare module "@kickstartds/cms/lib/page/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {SectionProps} from "@kickstartds/base/lib/section/typing";

/**
 * Identifying uuid for the page
 */
export type ID = string;
/**
 * URL slug for the page
 */
export type Slug = string;
/**
 * Choose a layout for the page
 */
export type Layout = "default" | "content" | "blog-list" | "blog-detail" | "glossary";
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
 * Collection of sections (with their contents) to render on the page
 */
export type Sections = SectionProps[];
/**
 * Last update date for the page
 */
export type Updated = string;
/**
 * Creation date for the page
 */
export type Created = string;

/**
 * Abstracts a page concept into JSON schema
 */
export interface PageProps {
  id: ID;
  slug: Slug;
  layout: Layout;
  title: Title;
  description?: Description;
  keywords?: Keywords;
  image?: PreviewImage;
  cardImage?: CardPreviewImage;
  sections?: Sections;
  updated?: Updated;
  created?: Created;
}

}
      