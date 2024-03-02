import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Radio } from "@kickstartds/form/lib/radio/";
import schema from "@kickstartds/form/lib/radio/radio.schema.dereffed.json";
import customProperties from "../form-tokens.json";

const meta: Meta = {
  title: "Form / Radio",
  component: Radio,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};
type Story = StoryObj<typeof Radio>;

export default meta;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 172,
    },
  },
  args: pack({}),
};
