declare module "@kickstartds/content/lib/quotes-slider/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {QuoteProps} from "./QuoteProps";

/**
 * Additional css classes attached to the slider
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

export interface QuotesSliderProps {
  slides?: QuoteProps[];
  className?: Class;
  component?: KsComponentAttribute;
}

}
    