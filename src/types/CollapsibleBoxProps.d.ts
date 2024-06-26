declare module "@kickstartds/base/lib/collapsible-box/typing" {
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Include the text for the collapsible that should be visible before opening
 */
export type SummaryTextForTheCollapsible = string;
/**
 * Include the text for the collapsible that should be visible after opening
 */
export type ContentOfTheCollapsible = string;
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

/**
 * Component to conditionally show additional info
 */
export interface CollapsibleBoxProps {
  summary: SummaryTextForTheCollapsible;
  text: ContentOfTheCollapsible;
  className?: Class;
  component?: KsComponentAttribute;
}

}
      