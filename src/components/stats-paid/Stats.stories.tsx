import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { StatsPaid } from "./StatsPaidComponent";

import schema from "./stats-paid.schema.json";

const meta: Meta<typeof StatsPaid> = {
  title: "Components/StatsPaid",
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

export const Default: Story = {};
Default.args = pack({
  stats: [
    {
      icon: "home",
      number: "1000",
      title: "Users",
      description: "Number of active users",
    },
    {
      icon: "person",
      number: "500",
      title: "Subscribers",
      description: "Number of subscribers",
    },
  ],
});
