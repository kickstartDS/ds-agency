declare module "@kickstartds/base/lib/section/typing" {
  /* eslint-disable */
  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  import type { ButtonProps } from "@kickstartds/base/lib/button/typing";
  import type { HeadlineProps } from "@kickstartds/base/lib/headline/typing";
  import type { TeaserBoxProps } from "@kickstartds/base/lib/teaser-box/typing";

  /**
   * Headline for the section
   */
  export type Headline = string;
  /**
   * Subheadline for the section
   */
  export type Subheadline = string;
  /**
   * Switch the order of headline and subheadline
   */
  export type SwitchHeadlineOrder = boolean;
  /**
   * Width of section to use
   */
  export type Width = "full" | "max" | "wide" | "default" | "narrow";
  /**
   * Size of gutter to use
   */
  export type Gutter = "large" | "default" | "small" | "none";
  /**
   * Layout mode used for section contents
   */
  export type Mode = "default" | "tile" | "list";
  /**
   * Alignment for the section headline and cta's
   */
  export type Alignment = "left" | "center";
  /**
   * Allowed content for the section
   */
  export type Content = (ButtonProps | HeadlineProps | TeaserBoxProps)[];
  /**
   * Style of background
   */
  export type Style = "default" | "accent" | "bold";
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
   * Label for the Call to action
   */
  export type Label = string;
  /**
   * Target for the Call to action
   */
  export type Target = string;
  /**
   * Add Call to actions to the end of the section
   */
  export type CallToActions = {
    label: Label;
    target: Target;
  }[];

  /**
   * Component used to layout components into pages
   */
  export interface SectionProps {
    headline?: Headline;
    sub?: Subheadline;
    switchHeadlineOrder?: SwitchHeadlineOrder;
    width?: Width;
    gutter?: Gutter;
    mode?: Mode;
    align?: Alignment;
    content?: Content;
    style?: Style;
    spaceBefore?: SpaceBefore;
    spaceAfter?: SpaceAfter;
    inverted?: Inverted;
    ctas?: CallToActions;
  }
}
