declare module "@kickstartds/content/lib/visual-slider/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {SliderProps} from "@kickstartds/content/lib/slider/typing";
import type {VisualProps} from "@kickstartds/content/lib/visual/typing";

/**
 * preview label
 */
export type SlidePreviewLabel = string;
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

/**
 * Visual Slider
 */
export interface VisualSliderProps {
  /**
   * Referenced component SliderProps
   */
  autoplay?: SliderProps;
  slides: (VisualProps & {
    label?: SlidePreviewLabel;
  })[];
  className?: Class;
  component?: KsComponentAttribute;
}

}
      