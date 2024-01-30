import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Button } from "./ButtonComponent";
import schema from "./button.schema.dereffed.json";
import cssprops from "./button-tokens.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Components/Button",
  args,
  argTypes,
  component: Button,
  parameters: {
    jsonschema: schema,
    cssprops,
  },
};
type Story = StoryObj<typeof Button>;

export default meta;

export const PrimaryButton: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 172,
    },
  },
  args: pack({
    label: "Primary Button",
    variant: "primary",
  }),
};

export const SecondaryButton: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 172,
    },
  },
  args: pack({
    label: "Secondary Button",
    variant: "secondary",
  }),
};

export const TertiaryButton: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 172,
    },
  },
  args: pack({
    label: "Tertiary Button",
    variant: "tertiary",
  }),
};

export const PrimaryDisabledButton: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 172,
    },
  },
  args: pack({
    label: "Disabled Button",
    variant: "primary",
    disabled: true,
  }),
};
