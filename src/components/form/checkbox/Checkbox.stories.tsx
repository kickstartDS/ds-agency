import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Checkbox } from "@kickstartds/form/lib/checkbox";
import schema from "@kickstartds/form/lib/checkbox/checkbox.schema.dereffed.json";
import customProperties from "../form-tokens.json";

const meta: Meta = {
  title: "Form / Checkbox",
  component: Checkbox,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
    playroom: { disable: true },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 172,
    },
  },
  args: pack({}),
};
