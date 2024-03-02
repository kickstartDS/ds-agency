import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { ImageText } from "./ImageTextComponent";
import schema from "./image-text.schema.dereffed.json";
import customProperties from "./image-text-tokens.json";

const meta: Meta = {
  title: "Components/Image Text",
  component: ImageText,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof ImageText>;

export const BesideRightLayout: Story = {
  parameters: {
    viewport: {
      width: 1240,
      height: 515,
    },
  },
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
  parameters: {
    viewport: {
      width: 760,
      height: 829,
    },
  },
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
