import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Text } from "./TextComponent";
import schema from "./text.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta<typeof Text> = {
  title: "Components/Text",
  args,
  argTypes,
  component: Text,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Text>;

export default meta;

export const SingleColumn: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 407,
    },
  },
  args: pack({
    layout: "singleColumn",
    text: `We prioritize efficiency without sacrificing quality. Our secret? A groundbreaking, code-first, open-source framework for [building design systems](#).

This tool expedites our **development process**, saving you precious time and enabling us to deliver superior results more quickly. With this framework, your design system aspirations can be realized faster than ever before.

_Experience the power of streamlined development and see the difference it can make in your projects._`,
  }),
};

export const Centered: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 407,
    },
  },
  args: pack({
    align: "center",
    text: `We prioritize efficiency without sacrificing quality. Our secret? A groundbreaking, code-first, open-source framework for [building design systems](#).

This tool expedites our **development process**, saving you precious time and enabling us to deliver superior results more quickly. With this framework, your design system aspirations can be realized faster than ever before.

_Experience the power of streamlined development and see the difference it can make in your projects._`,
  }),
};

export const MultiColumn: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 330,
    },
  },
  args: pack({
    layout: "multiColumn",
    text: `We prioritize efficiency without sacrificing quality. Our secret? A groundbreaking, code-first, open-source framework for [building design systems](#).
This tool expedites our **development process**, saving you precious time and enabling us to deliver superior results more quickly. With this framework, your design system aspirations can be realized faster than ever before.
_Experience the power of streamlined development and see the difference it can make in your projects._`,
  }),
};

export const Highlight: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 482,
    },
  },
  args: pack({
    highlightText: true,
    text: `We prioritize efficiency without sacrificing quality. Our secret? A groundbreaking, code-first, open-source framework for [building design systems](#).

This tool expedites our **development process**, saving you precious time and enabling us to deliver superior results more quickly. With this framework, your design system aspirations can be realized faster than ever before.

_Experience the power of streamlined development and see the difference it can make in your projects._`,
  }),
};
