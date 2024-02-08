import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Image } from "./ImageComponent";
import schema from "./image.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Components/Image",
  args,
  argTypes,
  component: Image,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Image>;

export default meta;

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
