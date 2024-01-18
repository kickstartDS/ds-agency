declare module "@kickstartds/content/lib/slider/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Automatically move to next slide after 4 seconds without user interaction
 */
export type AutoPlay = boolean;
/**
 * Add bullet navigation
 */
export type ShowNavigation = boolean;
export type TeaseNeighbourSlides = boolean;
export type EqualizeSlidesHeights = boolean;
/**
 * Size of the gap added between slides in pixels
 */
export type Gap = number;
/**
 * Add arrows on the left and right to navigate to next or previous slide
 */
export type ShowArrows = boolean;
/**
 * Type of the movement
 */
export type Type = "slider" | "carousel";
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;

export interface SliderProps {
  autoplay?: AutoPlay;
  nav?: ShowNavigation;
  teaseNeighbours?: TeaseNeighbourSlides;
  equalHeight?: EqualizeSlidesHeights;
  gap?: Gap;
  arrows?: ShowArrows;
  type?: Type;
  className?: Class;
}

}
      