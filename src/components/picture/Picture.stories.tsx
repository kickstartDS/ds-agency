import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Picture } from "./PictureComponent";
import schema from "./picture.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Components/Picture",
  args,
  argTypes,
  component: Picture,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Picture>;

export default meta;

export const ResponsivePicture: Story = {
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
