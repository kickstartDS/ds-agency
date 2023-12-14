import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Text } from "./TextComponent";
import schema from "./text.schema.json";

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
  args: pack({
    layout: "singleColumn",
    text: "We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever.",
  }),
};

export const Centered: Story = {
  args: pack({
    align: "center",
    text: "We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever.",
  }),
};

export const MultiColumn: Story = {
  args: pack({
    layout: "multiColumn",
    text: "We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever.",
  }),
};

export const Highlight: Story = {
  args: pack({
    highlightText: true,
    text: "We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever.",
  }),
};
