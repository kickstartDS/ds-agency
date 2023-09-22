declare module "@kickstartds/base/lib/media-image/typing" {
  /* eslint-disable */
  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  import type { PictureProps } from "@kickstartds/base/lib/picture/typing";

  /**
   * Display media item over full width
   */
  export type FullWidthMedia = boolean;
  /**
   * Caption
   */
  export type Caption = string;

  export interface TextMediaImageProps {
    /**
     * Referenced component Picture
     */
    image?: PictureProps;
    full?: FullWidthMedia;
    caption?: Caption;
  }
}
