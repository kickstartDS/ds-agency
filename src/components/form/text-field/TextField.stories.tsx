import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { TextField } from "@kickstartds/form/lib/text-field/";
import schema from "@kickstartds/form/lib/text-field/text-field.schema.dereffed.json";
import cssprops from "../form-tokens.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Form/ Text Field",
  args,
  argTypes,
  component: TextField,
  parameters: {
    jsonschema: schema,
    cssprops,
  },
};
type Story = StoryObj<typeof TextField>;

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
