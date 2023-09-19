/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * The layout variant to use for the features
 */
export type Layout = "largeTiles" | "smallTiles" | "list";
/**
 * Activate/disable the CTA
 */
export type CTAToggle = CTAToggle1 & CTAToggle2;
export type CTAToggle1 = boolean;
export type CTAToggle2 = string;
/**
 * The features to display
 *
 * @minItems 1
 * @maxItems 8
 */
export type Features =
  | [
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      }
    ]
  | [
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      }
    ]
  | [
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      }
    ]
  | [
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      }
    ]
  | [
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      }
    ]
  | [
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      }
    ]
  | [
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      }
    ]
  | [
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      },
      {
        icon?: Icon;
        title: Title;
        text: Text;
        cta?: CallToAction;
        [k: string]: unknown;
      }
    ];
/**
 * The icon for the feature
 */
export type Icon = string;
/**
 * The title of the feature
 */
export type Title = string;
/**
 * The description of the feature
 */
export type Text = string;
/**
 * The CTA link
 */
export type CallToActionLink = string;
/**
 * The text label displayed on the link
 */
export type LinkLabel = string;

/**
 * Component used to display a set of features
 */
export interface FeaturesProps {
  layout: Layout;
  style?: "intext" | "stack" | "centered" | "besideLarge" | "besideSmall";
  ctas?: {
    toggle?: CTAToggle;
    style?: "button" | "link" | "intext";
    [k: string]: unknown;
  };
  features: Features;
  [k: string]: unknown;
}
/**
 * The call to action
 */
export interface CallToAction {
  link: CallToActionLink;
  label: LinkLabel;
  [k: string]: unknown;
}