/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * The name of the author
 */
export type Name = string;
/**
 * The byline of the author
 */
export type Byline = string;
/**
 * The image URL of the author
 */
export type Image = string;
/**
 * The Twitter name of the author
 */
export type Twitter = string;
/**
 * The Email of the author
 */
export type Email = string;
/**
 * The icon name for the social link
 */
export type Icon = string;
/**
 * The href for the social link
 */
export type Href = string;
/**
 * The title for the social link
 */
export type Title = string;
/**
 * The social sharing links for the blog post
 */
export type SocialSharing = {
  icon: Icon;
  href: Href;
  title: Title;
}[];
/**
 * The reading time for the blog post
 */
export type ReadingTime = string;
/**
 * The date when the blog post was published
 */
export type PublishedDate = string;

/**
 * Meta info for a singular blog entry
 */
export interface BlogAsideProps {
  author: Author;
  socialSharing?: SocialSharing;
  readingTime?: ReadingTime;
  date: PublishedDate;
}
/**
 * The author of the blog post
 */
export interface Author {
  name: Name;
  byline?: Byline;
  image?: Image;
  twitter?: Twitter;
  email?: Email;
}
