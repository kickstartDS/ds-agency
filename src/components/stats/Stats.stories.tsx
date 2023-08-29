import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Stats } from "./StatsComponent";
import schema from "./stats.schema.json";

const meta: Meta<typeof Stats> = {
  title: "Components/Stats",
  component: Stats,
  parameters: {
    jsonSchema: {
      schema,
    },
  },
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof Stats>;

export const Default: Story = {};
Default.args = pack({
  stats: [
    { value: 10, label: "Stat 1" },
    { value: 20, label: "Stat 2" },
    { value: 30, label: "Stat 3" },
  ],
});
