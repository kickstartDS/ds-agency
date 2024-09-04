import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Button } from "./ButtonComponent";
import schema from "./button.schema.dereffed.json";
import customProperties from "./button-tokens.json";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 200,
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
      height: 200,
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
      height: 200,
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
      height: 200,
    },
  },
  args: pack({
    label: "Disabled Button",
    variant: "primary",
    disabled: true,
  }),
};
