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
  args: pack({
    alt: "Agency",
    sources: [
      {
        srcSet:
          "img/responsive-s.png 420w, img/responsive-m.png 980w, img/responsive-l.png",
      },
      {
        srcSet:
          "img/responsive-s.png 420w, img/responsive-m.png 980w, img/responsive-l.png",
      },
      {
        srcSet:
          "img/responsive-s.png 420w, img/responsive-m.png 980w, img/responsive-l.png",
      },
    ],
  }),
};

export const PresetSize: Story = {
  args: pack({
    src: "img/agency.png",
    alt: "Agency",
    width: "400px",
    height: "300px",
  }),
};
