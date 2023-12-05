import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Text } from "./TextComponent";
import schema from "./text.schema.json";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    jsonSchema: {
      schema,
    },
  },
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof Text>;

export const SingleColumn: Story = {};
SingleColumn.args = pack({
  layout: "singleColumn",
  text: "We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever.",
});

export const Centered: Story = {};
Centered.args = pack({
  align: "center",
  text: "We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever.",
});

export const MultiColumn: Story = {};
MultiColumn.args = pack({
  layout: "multiColumn",
  text: "We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever.",
});

export const Highlight: Story = {};
Highlight.args = pack({
  highlight: true,
  text: "We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever.",
});
