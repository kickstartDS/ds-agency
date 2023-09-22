declare module "@kickstartds/base/lib/headline/typing" {
  /* eslint-disable */
  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  /**
   * Text content of headline
   */
  export type Text = string;
  /**
   * Subheadline content
   */
  export type Sub = string;
  /**
   * Switch order of headline and subheadline
   */
  export type SwitchOrder = boolean;
  export type SectionAlignment = "left" | "center" | "right";
  /**
   * Level of headline to use
   */
  export type Level = "h1" | "h2" | "h3" | "h4" | "p";
  /**
   * Style of headline to show
   */
  export type Style = "h1" | "h2" | "h3" | "h4" | "p";
  /**
   * Whether to display space after headline
   */
  export type SpaceAfter = "minimum" | "small" | "large";
  /**
   * Set a custom class name
   */
  export type ClassName = string;

  /**
   * Component used for headlines
   */
  export interface HeadlineProps {
    text: Text;
    sub?: Sub;
    switchOrder?: SwitchOrder;
    align?: SectionAlignment;
    level: Level;
    style?: Style;
    spaceAfter?: SpaceAfter;
    className?: ClassName;
  }
}
