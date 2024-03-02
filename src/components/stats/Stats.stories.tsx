import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Stats } from "./StatsComponent";
import schema from "./stats.schema.dereffed.json";
import customProperties from "./stats-tokens.json";

const meta: Meta<typeof Stats> = {
  title: "Components/Stats",
  component: Stats,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Stats>;

export const WithDescription: Story = {
  parameters: {
    viewport: {
      width: 790,
      height: 400,
    },
  },
  args: pack({
    stat: [
      {
        number: 1500,
        title: "Users",
        description:
          "Experience the power of our platform, embraced by a vast community of users. Our user base is diverse and dynamic, including both active and inactive members. Join us and become part of this ever-growing community.",
      },
      {
        number: 350,
        title: "Subscribers",
        description:
          "Stay ahead with our regular updates and newsletters. Our subscribers are always in the loop, receiving the latest news and features. Subscribe now and never miss an update from us.",
      },
    ],
  }),
};

export const Simple: Story = {
  parameters: {
    viewport: {
      width: 700,
      height: 340,
    },
  },
  args: pack({
    stat: [
      { number: 1500, title: "Users" },
      { number: 350, title: "Subscribers" },
      { number: 125, title: "Components" },
    ],
  }),
};
