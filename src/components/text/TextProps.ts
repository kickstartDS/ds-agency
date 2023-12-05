/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Text
 */
export type Text = string;
/**
 * Variant of layout to be used
 */
export type Layout = "singleColumn" | "multiColumn";
/**
 * Alignment of text
 */
export type Alignment = "left" | "center";
/**
 * Visually highlight the text
 */
export type HighlightText = boolean;

/**
 * Component used for displaying text in chapters
 */
export interface TextProps {
  text: Text;
  layout?: Layout;
  align?: Alignment;
  highlight?: HighlightText;
}
