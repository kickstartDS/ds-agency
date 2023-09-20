/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * The date when the blog post was published
 */
export type PublishedDate = string;
/**
 * The tags associated with the blog post
 */
export type Tags = string[];
/**
 * The headline of the blog post
 */
export type Headline = string;
/**
 * The source of the cover image for the blog post
 */
export type CoverImage = string;

/**
 * Intro portion of a singular blog entry
 */
export interface BlogHeadProps {
  date?: PublishedDate;
  tags?: Tags;
  headline: Headline;
  image?: CoverImage;
}
