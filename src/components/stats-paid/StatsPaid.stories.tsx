import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { StatsPaid } from "./StatsPaidComponent";
import schema from "./stats-paid.schema.json";

const meta: Meta<typeof StatsPaid> = {
  title: "Paid Components/Stats",
  component: StatsPaid,
  parameters: {
    jsonSchema: {
      schema,
    },
  },
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof StatsPaid>;

export const Icons: Story = {
  args: pack({}),
};
