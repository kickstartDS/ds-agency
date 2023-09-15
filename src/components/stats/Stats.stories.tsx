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

export const WithIcons: Story = {};
WithIcons.args = pack({
  stats: [
    { value: "10", label: "Stat 1", icon: "person" },
    { value: "20", label: "Stat 2", icon: "home" },
    { value: "30", label: "Stat 3", icon: "map" },
  ],
});

export const Numbers: Story = {};
Numbers.args = pack({
  stats: [
    { value: "10", label: "Stat 1", icon: "" },
    { value: "20", label: "Stat 2", icon: "" },
    { value: "30", label: "Stat 3", icon: "" },
  ],
});
