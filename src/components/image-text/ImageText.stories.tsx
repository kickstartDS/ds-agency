import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { ImageText } from "./ImageTextComponent";
import schema from "./image-text.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Components/Image Text",
  args,
  argTypes,
  component: ImageText,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof ImageText>;

export default meta;

export const AboveLayout: Story = {
  args: pack({
    text: "We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever.",
    image: {
      src: "img/close-up-young-business-team-working.png",
      alt: "Agency",
    },
    layout: "above",
  }),
};

export const BesideRightLayout: Story = {
  args: pack({
    text: "We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever.",
    image: {
      src: "img/close-up-young-business-team-working.png",
      alt: "Agency",
    },
    layout: "beside-right",
  }),
};
