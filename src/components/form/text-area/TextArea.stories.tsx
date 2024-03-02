import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { TextArea } from "@kickstartds/form/lib/text-area/";
import schema from "@kickstartds/form/lib/text-area/text-area.schema.dereffed.json";
import customProperties from "../form-tokens.json";

const meta: Meta = {
  title: "Form/ Text Area",
  component: TextArea,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 246,
    },
  },
  args: pack({}),
};
