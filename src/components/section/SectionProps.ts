/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {HeroProps} from "../hero/HeroProps";
import type {CtaProps} from "../cta/CtaProps";
import type {MosaicProps} from "../mosaic/MosaicProps";
import type {ButtonsProps} from "../buttons/ButtonsProps";

/**
 * Width of section to use
 */
export type Width = "full" | "max" | "wide" | "default" | "narrow";
/**
 * Style of background
 */
export type Style =
  | "default"
  | "accent"
  | "bold"
  | "stagelights"
  | "horizontalGradient"
  | "verticalGradient"
  | "accentTransition"
  | "primaryTransition"
  | "glow";
/**
 * Amount of spacing before the section
 */
export type SpaceBefore = "default" | "small" | "none";
/**
 * Amount of spacing after the section
 */
export type SpaceAfter = "default" | "small" | "none";
/**
 * Whether to invert the section
 */
export type Inverted = boolean;
/**
 * Headline Text for the section
 */
export type Headline = string;
/**
 * Make the headline larger
 */
export type LargeHeadline = boolean;
/**
 * Width of headline to use
 */
export type HeadlineWidth = "unset" | "narrow" | "default" | "wide";
/**
 * Choose the text alignment for the headline
 */
export type HeadlineTextAlignment = "left" | "center" | "right";
/**
 * Choose an alignment for positioning the headline
 */
export type HeadlineAlignment = "left" | "center" | "right";
/**
 * Subheadline for the section
 */
export type Subheadline = string;
/**
 * Switch the order of headline and subheadline
 */
export type SwitchHeadlineOrder = boolean;
/**
 * Width of content to use
 */
export type ContentWidth = "unset" | "narrow" | "default" | "wide";
/**
 * Choose an alignment for the content
 */
export type ContentAlignment = "left" | "center" | "right";
/**
 * Size of gutter to use
 */
export type Gutter = "large" | "default" | "small" | "none";
/**
 * Layout mode used for section contents
 */
export type Mode = "default" | "tile" | "list";
/**
 * Allowed components for content
 */
export type Content = (HeroProps | CtaProps | MosaicProps)[];

/**
 * Component used to layout components into pages
 */
export interface SectionProps {
  width?: Width;
  style?: Style;
  spaceBefore?: SpaceBefore;
  spaceAfter?: SpaceAfter;
  inverted?: Inverted;
  headline?: {
    text?: Headline;
    large?: LargeHeadline;
    width?: HeadlineWidth;
    textAlign?: HeadlineTextAlignment;
    align?: HeadlineAlignment;
    sub?: Subheadline;
    switchOrder?: SwitchHeadlineOrder;
  };
  content?: {
    width?: ContentWidth;
    align?: ContentAlignment;
    gutter?: Gutter;
    mode?: Mode;
  };
  components?: Content;
  /**
   * Referenced component ButtonsProps
   */
  buttons?: ButtonsProps;
}
