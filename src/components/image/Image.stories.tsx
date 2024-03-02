import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Image } from "./ImageComponent";
import schema from "./image.schema.dereffed.json";
import customProperties from "./image-tokens.json";

const meta: Meta = {
  title: "Components/Image",
  component: Image,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Image>;

export const ResponsiveImage: Story = {
  parameters: {
    viewport: {
      width: 800,
      height: 600,
    },
  },
  args: pack({
    alt: "Agency",
    sources: [
      {
        srcSet:
          "img/responsive_image-420.png 420w, img/responsive_image-980.png 980w, img/responsive_image-1680.png",
      },
      {
        srcSet:
          "img/responsive_image-420.png 420w, img/responsive_image-980.png 980w, img/responsive_image-1680.png",
      },
      {
        srcSet:
          "img/responsive_image-420.png 420w, img/responsive_image-980.png 980w, img/responsive_image-1680.png",
      },
    ],
  }),
};

export const PresetSize: Story = {
  parameters: {
    viewport: {
      width: 800,
      height: 414,
    },
  },
  args: pack({
    src: "img/close-up-young-business-team-working.png",
    alt: "Agency",
    width: "400px",
    height: "300px",
  }),
};

export const CustomAspectRatio: Story = {
  parameters: {
    viewport: {
      width: 800,
      height: 600,
    },
  },
  args: pack({
    src: "img/close-up-young-business-team-working.png",
    alt: "Agency",
    aspectRatio: "square",
  }),
};
