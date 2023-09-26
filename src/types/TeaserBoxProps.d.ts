declare module "@kickstartds/base/lib/teaser-box/typing" {
  /* eslint-disable */
  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  /**
   * Select an image to display inside the teaser box, at the top
   */
  export type ImageSource = string;
  /**
   * Choose the ratio used to crop and display the image
   */
  export type ImageRatio = "4:3" | "16:9" | "1:1";
  /**
   * Optionally add inner spacing to the displayed image
   */
  export type ImageSpacing = boolean;
  /**
   * Topic for the teaser box. Displayed before the text, in bold
   */
  export type Topic = string;
  /**
   * Text for the teaser box
   */
  export type TextContent = string;
  export type Inverted = boolean;
  /**
   * Hides the link. The box as a whole keeps being clickable
   */
  export type HideLink = boolean;
  /**
   * Text content to display inside the button
   */
  export type Label = string;
  /**
   * Target that should be linked, makes the button behave like a link semantically
   */
  export type Target = string;
  /**
   * Variant of button to be used
   */
  export type Variant = "primary" | "secondary" | "tertiary";
  /**
   * Choose an icon
   */
  export type Icon = string;
  /**
   * Size of button to use
   */
  export type Size = "small" | "medium" | "large";
  /**
   * Whether the button should be disabled
   */
  export type Disabled = boolean;
  /**
   * Additional css classes attached to the box
   */
  export type Class = string;
  /**
   * Optional custom component identifier
   */
  export type KsComponentAttribute = string;

  /**
   * Component to tease external content
   */
  export interface TeaserBoxProps {
    image?: ImageSource;
    ratio: ImageRatio;
    imageSpacing?: ImageSpacing;
    topic?: Topic;
    text?: TextContent;
    inverted?: Inverted;
    link?: Button;
    className?: Class;
    component?: KsComponentAttribute;
  }
  /**
   * Component used for user interaction
   */
  export interface Button {
    hidden?: HideLink;
    label: Label;
    target?: Target;
    variant?: Variant;
    icon?: Icon;
    size?: Size;
    disabled?: Disabled;
  }
}
