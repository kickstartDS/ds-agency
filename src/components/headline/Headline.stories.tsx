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
    text: "Headline level h1",
  }),
};

export const H2: Story = {
  args: pack({
    level: "h2",
    style: "h2",
    text: "Headline level h2",
  }),
};

export const H3: Story = {
  args: pack({
    level: "h3",
    style: "h3",
    text: "Headline level h3",
  }),
};

export const H4: Story = {
  args: pack({
    level: "h4",
    style: "h4",
    text: "Headline level h4",
  }),
};

export const Subheadline: Story = {
  args: pack({
    text: "With a subheadline",
    sub: "This is a subheadline, displayed below the headline",
  }),
};

export const SubheadlineOrderSwapped: Story = {
  args: pack({
    text: "With a swapped subheadline",
    sub: "This is a subheadline, displayed above the headline",
    switchOrder: true,
  }),
};

export const HeadlineWithMarkdown: Story = {
  args: pack({
    text: "With *Markdown* use",
    sub: "This is a subheadline, displayed **below the headline**",
  }),
};
