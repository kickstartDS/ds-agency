import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Checkbox } from "@kickstartds/form/lib/checkbox/";
import schema from "@kickstartds/form/lib/checkbox/checkbox.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Form / Checkbox",
  args,
  argTypes,
  component: Checkbox,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Checkbox>;

export default meta;

export const Default: Story = {
  args: pack({}),
};
