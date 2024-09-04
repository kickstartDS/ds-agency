import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { BlogHead } from "./BlogHeadComponent";
import schema from "./blog-head.schema.dereffed.json";
import customProperties from "./blog-head-tokens.json";

const meta: Meta<typeof BlogHead> = {
  title: "Blog/ Blog Head",
  component: BlogHead,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof BlogHead>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 863,
    },
  },
  args: pack({
    date: "12/30/2022",
    tags: [
      {
        entry: "Technology",
      },
      {
        entry: "AI",
      },
    ],
    headline: "The Future of AI",
    image: "img/close-up-young-business-team-working.png",
  }),
};
