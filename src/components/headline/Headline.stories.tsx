import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Headline } from "./HeadlineComponent";
import schema from "./headline.schema.dereffed.json";
import customProperties from "./headline-tokens.json";

const meta: Meta = {
  title: "Components/Headline",
  component: Headline,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Headline>;

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
