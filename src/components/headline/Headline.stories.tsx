import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Headline } from "./HeadlineComponent";
import schema from "./headline.schema.dereffed.json";
import cssprops from "./headline-tokens.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Components/Headline",
  args,
  argTypes,
  component: Headline,
  parameters: {
    jsonschema: schema,
    cssprops,
  },
};
type Story = StoryObj<typeof Headline>;

export default meta;

export const H1: Story = {
  parameters: {
    viewport: {
      width: 800,
      height: 218,
    },
  },
  args: pack({
    level: "h1",
    style: "h1",
    text: "Design System Services",
  }),
};

export const H2: Story = {
  parameters: {
    viewport: {
      width: 800,
      height: 206,
    },
  },
  args: pack({
    level: "h2",
    style: "h2",
    text: "Design System Services",
  }),
};

export const H3: Story = {
  parameters: {
    viewport: {
      width: 800,
      height: 195,
    },
  },
  args: pack({
    level: "h3",
    style: "h3",
    text: "Design System Services",
  }),
};

export const H4: Story = {
  parameters: {
    viewport: {
      width: 800,
      height: 189,
    },
  },
  args: pack({
    level: "h4",
    style: "h4",
    text: "Design System Services",
  }),
};

export const WithSubheadline: Story = {
  parameters: {
    viewport: {
      width: 800,
      height: 252,
    },
  },
  args: pack({
    text: "Design System Services",
    sub: "Crafting Consistency, Fostering Growth",
  }),
};

export const OrderSwapped: Story = {
  parameters: {
    viewport: {
      width: 800,
      height: 252,
    },
  },
  args: pack({
    text: "Design System Services",
    sub: "Crafting Consistency, Fostering Growth",
    switchOrder: true,
  }),
};

export const WithMarkdown: Story = {
  parameters: {
    viewport: {
      width: 800,
      height: 252,
    },
  },
  args: pack({
    text: "**Design System** Services",
    sub: "Crafting Consistency, Fostering Growth",
  }),
};
