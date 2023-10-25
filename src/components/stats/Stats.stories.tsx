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

export const NumbersWithLabel: Story = {};
NumbersWithLabel.args = pack({
  stats: [
    { number: "1500", label: "Users" },
    { number: "350", label: "Subscribers" },
    { number: "125", label: "Components" },
  ],
});

export const NumbersWithDescription: Story = {};
NumbersWithDescription.args = pack({
  stats: [
    {
      number: "1500",
      label: "Users",
      description:
        "Experience the power of our platform, embraced by a vast community of users. Our user base is diverse and dynamic, including both active and inactive members. Join us and become part of this ever-growing community.",
    },
    {
      number: "350",
      label: "Subscribers",
      description:
        "Stay ahead with our regular updates and newsletters. Our subscribers are always in the loop, receiving the latest news and features. Subscribe now and never miss an update from us.",
    },
  ],
});
