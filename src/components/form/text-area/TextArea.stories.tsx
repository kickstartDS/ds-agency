import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { TextArea } from "@kickstartds/form/lib/text-area/";
import schema from "@kickstartds/form/lib/text-area/text-area.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Form/ Text Area",
  args,
  argTypes,
  component: TextArea,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof TextArea>;

export default meta;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 246,
    },
  },
  args: pack({}),
};
