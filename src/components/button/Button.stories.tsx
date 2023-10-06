import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Button } from "./ButtonComponent";
import schema from "./button.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Components/Button",
  args,
  argTypes,
  component: Button,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Button>;

export default meta;

export const PrimaryButton: Story = {
  args: pack({
    label: "Primary Button",
    variant: "primary",
  }),
};

export const SecondaryButton: Story = {
  args: pack({
    label: "Secondary Button",
    variant: "secondary",
  }),
};

export const TertiaryButton: Story = {
  args: pack({
    label: "Tertiary Button",
    variant: "tertiary",
  }),
};

export const PrimaryDisabledButton: Story = {
  args: pack({
    label: "Disabled Button",
    variant: "primary",
    disabled: true,
  }),
};
