/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The images to display in the gallery
 *
 * @minItems 1
 * @maxItems 10
 */
export type Images =
  | [
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      }
    ]
  | [
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      }
    ]
  | [
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      }
    ]
  | [
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      }
    ]
  | [
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      }
    ]
  | [
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      }
    ]
  | [
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      }
    ]
  | [
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      }
    ]
  | [
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      }
    ]
  | [
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      },
      {
        src: Src;
        alt?: AltText;
        caption?: Caption;
      }
    ];
/**
 * The source of the image
 */
export type Src = string;
/**
 * Alt text of the image
 */
export type AltText = string;
/**
 * The caption of the image
 */
export type Caption = string;
/**
 * The layout of the gallery images
 */
export type Layout = "stack" | "smallTiles" | "largeTiles";
/**
 * The aspect ratio of the gallery images
 */
export type AspectRatio = "unset" | "square" | "wide" | "landscape";
/**
 * Display images in a lightbox gallery
 */
export type Lightbox = boolean;

/**
 * Component used to display a gallery of images
 */
export interface GalleryProps {
  images: Images;
  layout?: Layout;
  aspectRatio?: AspectRatio;
  lightbox?: Lightbox;
}
