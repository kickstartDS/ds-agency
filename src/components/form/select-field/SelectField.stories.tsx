import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { SelectField } from "@kickstartds/form/lib/select-field/";
import schema from "@kickstartds/form/lib/select-field/select-field.schema.dereffed.json";
import cssprops from "../form-tokens.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Form/ Select Field",
  args,
  argTypes,
  component: SelectField,
  parameters: {
    jsonschema: schema,
    cssprops,
  },
};
type Story = StoryObj<typeof SelectField>;

export default meta;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 219,
    },
  },
  args: pack({}),
};
