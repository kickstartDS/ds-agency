import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { SelectField } from "@kickstartds/form/lib/select-field/";
import schema from "@kickstartds/form/lib/select-field/select-field.schema.dereffed.json";
import customProperties from "../form-tokens.json";

const meta: Meta = {
  title: "Form/ Select Field",
  component: SelectField,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof SelectField>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 219,
    },
  },
  args: pack({}),
};
