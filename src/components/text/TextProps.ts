/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Text
 */
export type TextStyle = string;
/**
 * Variant of layout to be used
 */
export type LayoutVariant = "singleColumn" | "multiColumn";
/**
 * Style of the text
 */
export type TextStyle1 = "highlight" | "default";

/**
 * Component used for displaying text in chapters
 */
export interface TextProps {
  text?: TextStyle;
  layoutVariant: LayoutVariant;
  textStyle?: TextStyle1;
  [k: string]: unknown;
}