/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The testimonial quote
 */
export type Quote = "slider" | "list" | "alternating";
/**
 * The testimonial quote
 */
export type Quote1 = string;
/**
 * The name of the quote author
 */
export type Name = string;
/**
 * The title of the quote author
 */
export type Title = string;
/**
 * The image to display with the testimonial
 */
export type Source = string;
/**
 * The alt text of the image file
 */
export type AltText = string;
/**
 * The rating of the testimonial, from 1 to 5
 */
export type Rating = number;
/**
 * Add testimonials featuring an image, a quote, a source and a rating
 */
export type Testimonials = {
  quote: Quote1;
  name: Name;
  title?: Title;
  image: {
    src?: Source;
    alt?: AltText;
  };
  rating?: Rating;
}[];

/**
 * Display testimonials with an optional image and rating
 */
export interface TestimonialsPaidProps {
  layout?: Quote;
  testimonials?: Testimonials;
}
