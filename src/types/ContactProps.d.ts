declare module "@kickstartds/base/lib/contact/typing" {
  /* eslint-disable */
  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  import type { PictureProps } from "@kickstartds/base/lib/picture/typing";

  /**
   * Name, company name, etc.
   */
  export type Title = string;
  /**
   * Position, profession, department, location, etc.
   */
  export type Subtitle = string;
  /**
   * Open link in new Tab
   */
  export type OpenLinkInNewTab = boolean;
  export type CopyText = string;
  /**
   * Additional css classes attached to the wrapping element
   */
  export type Class = string;
  /**
   * Optional custom component identifier
   */
  export type KsComponentAttribute = string;

  /**
   * Component to show contact information
   */
  export interface ContactProps {
    /**
     * Referenced component Picture
     */
    image?: PictureProps;
    title?: Title;
    subtitle?: Subtitle;
    links?: {
      icon?: string;
      label?: string;
      href?: string;
      newTab?: OpenLinkInNewTab;
    }[];
    copy?: CopyText;
    className?: Class;
    component?: KsComponentAttribute;
  }
}