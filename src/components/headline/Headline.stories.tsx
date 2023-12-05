import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Headline } from "./HeadlineComponent";
import schema from "./headline.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Components/Headline",
  args,
  argTypes,
  component: Headline,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Headline>;

export default meta;

export const H1: Story = {
  args: pack({
    level: "h1",
    style: "h1",
    text: "Design System Services",
  }),
};

export const H2: Story = {
  args: pack({
    level: "h2",
    style: "h2",
    text: "Design System Services",
  }),
};

export const H3: Story = {
  args: pack({
    level: "h3",
    style: "h3",
    text: "Design System Services",
  }),
};

export const H4: Story = {
  args: pack({
    level: "h4",
    style: "h4",
    text: "Design System Services",
  }),
};

export const Subheadline: Story = {
  args: pack({
    text: "Design System Services",
    sub: "Crafting Consistency, Fostering Growth",
  }),
};

export const SubheadlineOrderSwapped: Story = {
  args: pack({
    text: "Design System Services",
    sub: "Crafting Consistency, Fostering Growth",
    switchOrder: true,
  }),
};

export const HeadlineWithMarkdown: Story = {
  args: pack({
    text: "**Design System** Services",
    sub: "Crafting Consistency, Fostering Growth",
  }),
};
