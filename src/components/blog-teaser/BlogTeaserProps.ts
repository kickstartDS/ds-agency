/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * The date of the blog post
 */
export type Date = string;
/**
 * The tags for the blog post
 */
export type Tags = string[];
/**
 * The headline of the blog post
 */
export type Headline = string;
/**
 * The teaser text of the blog post
 */
export type TeaserText = string;
/**
 * The preview image for the blog post
 */
export type Image = string;
/**
 * The blog entry URL to link
 */
export type URL = string;
/**
 * The label to use for the link
 */
export type Label = string;
/**
 * Time to read for the blog post
 */
export type ReadingTime = string;
/**
 * The name of the author
 */
export type Name = string;
/**
 * The title of the author
 */
export type Title = string;
/**
 * The image URL of the author
 */
export type Image1 = string;

/**
 * Display a blog teaser with date, tags, headline, teaser text and author
 */
export interface BlogTeaserProps {
  date?: Date;
  tags?: Tags;
  headline: Headline;
  teaserText: TeaserText;
  image?: Image;
  link?: Link;
  readingTime?: ReadingTime;
  author?: Author;
  [k: string]: unknown;
}
/**
 * URL and label for the blog post linked
 */
export interface Link {
  url: URL;
  label?: Label;
  [k: string]: unknown;
}
/**
 * The author of the blog post
 */
export interface Author {
  name: Name;
  title?: Title;
  image?: Image1;
  [k: string]: unknown;
}
