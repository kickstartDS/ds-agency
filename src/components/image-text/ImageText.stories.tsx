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

export const BesideRightLayout: Story = {
  args: pack({
    text: `We prioritize efficiency without sacrificing quality. Our secret? A groundbreaking, code-first, open-source framework for [building design systems](#).

This tool expedites our **development process**, saving you precious time and enabling us to deliver superior results more quickly. With this framework, your design system aspirations can be realized faster than ever before.

_Experience the power of streamlined development and see the difference it can make in your projects._`,
    image: {
      src: "img/close-up-young-business-team-working.png",
      alt: "Agency",
    },
    layout: "beside-right",
  }),
};

export const AboveLayout: Story = {
  args: pack({
    text: `We prioritize efficiency without sacrificing quality. Our secret? A groundbreaking, code-first, open-source framework for [building design systems](#).

This tool expedites our **development process**, saving you precious time and enabling us to deliver superior results more quickly. With this framework, your design system aspirations can be realized faster than ever before.

_Experience the power of streamlined development and see the difference it can make in your projects._`,
    image: {
      src: "img/close-up-young-business-team-working.png",
      alt: "Agency",
    },
    layout: "above",
  }),
};
