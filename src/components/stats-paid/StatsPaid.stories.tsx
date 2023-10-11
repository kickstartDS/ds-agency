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

export const CountUpWithIcons: Story = {};
CountUpWithIcons.args = pack({
  stats: [
    { number: "1500", title: "Users", icon: "person" },
    { number: "350", title: "Subscribers", icon: "star" },
    { number: "125", title: "Locations", icon: "map" },
  ],
});

export const CountUpWithDescription: Story = {};
CountUpWithDescription.args = pack({
  stats: [
    {
      number: "1500",
      title: "Users",
      description:
        "Experience the power of our platform, embraced by a vast community of users. Our user base is diverse and dynamic, including both active and inactive members. Join us and become part of this ever-growing community.",
    },
    {
      number: "350",
      title: "Subscribers",
      description:
        "Stay ahead with our regular updates and newsletters. Our subscribers are always in the loop, receiving the latest news and features. Subscribe now and never miss an update from us.",
    },
  ],
});