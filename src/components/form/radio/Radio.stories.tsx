import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Radio } from "@kickstartds/form/lib/radio/";
import schema from "@kickstartds/form/lib/radio/radio.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Form / Radio",
  args,
  argTypes,
  component: Radio,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Radio>;

export default meta;

export const Default: Story = {
  args: pack({}),
};
