/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {HeroProps} from "../hero/HeroProps";
import type {CtaProps} from "../cta/CtaProps";
import type {MosaicProps} from "../mosaic/MosaicProps";
import type {CtaPaidProps} from "../cta-paid/CtaPaidProps";
import type {FaqProps} from "../faq/FaqProps";
import type {FeaturesProps} from "../features/FeaturesProps";
import type {GalleryProps} from "../gallery/GalleryProps";
import type {HeadlineProps} from "../headline/HeadlineProps";
import type {ImageStoryProps} from "../image-story/ImageStoryProps";
import type {SplitProps} from "../split/SplitProps";
import type {StatsProps} from "../stats/StatsProps";
import type {StatsPaidProps} from "../stats-paid/StatsPaidProps";
import type {TeaserCardProps} from "../teaser-card/TeaserCardProps";
import type {TestimonialsProps} from "../testimonials/TestimonialsProps";
import type {TestimonialsPaidProps} from "../testimonials-paid/TestimonialsPaidProps";
import type {TextProps} from "../text/TextProps";
import type {VideoCurtainProps} from "../video-curtain/VideoCurtainProps";
import type {ImageTextProps} from "../image-text/ImageTextProps";
import type {LogosProps} from "../logos/LogosProps";
import type {LogosPaidProps} from "../logos-paid/LogosPaidProps";
import type {ButtonProps} from "../button/ButtonProps";

/**
 * Toggle Content Wireframe
 */
export type ContentLayout = boolean;
/**
 * Width of section to use
 */
export type Width = "full" | "max" | "wide" | "default" | "narrow";
/**
 * Style of background
 */
export type Style =
  | "stagelights"
  | "horizontalGradient"
  | "verticalGradient"
  | "accentTransition"
  | "boldTransition"
  | "symmetricGlow"
  | "anchorGlow";
/**
 * Color of background
 */
export type Style1 = "default" | "accent" | "bold";
/**
 * Show spotlight behind cursor
 */
export type Spotlight = boolean;
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
export type Content = (
  | HeroProps
  | CtaProps
  | MosaicProps
  | CtaPaidProps
  | FaqProps
  | FeaturesProps
  | GalleryProps
  | HeadlineProps
  | ImageStoryProps
  | SplitProps
  | StatsProps
  | StatsPaidProps
  | TeaserCardProps
  | TestimonialsProps
  | TestimonialsPaidProps
  | TextProps
  | VideoCurtainProps
  | ImageTextProps
  | LogosProps
  | LogosPaidProps
)[];
/**
 * Buttons of the Button Group
 */
export type Buttons = ButtonProps[];

/**
 * Custom component based on Section with additional properties
 */
export interface PreviewSectionProps {
  preview?: {
    title?: string;
    type?: "paid" | "free";
    link?: {
      href?: string;
      labelDesktop?: string;
      labelMobile?: string;
    };
    contentToggle?: ContentLayout;
  };
  width?: Width;
  style?: Style;
  backgroundColor?: Style1;
  spotlight?: Spotlight;
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
  buttons?: Buttons;
}
