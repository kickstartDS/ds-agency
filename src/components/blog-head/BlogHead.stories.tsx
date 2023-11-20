import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { BlogHead } from "./BlogHeadComponent";
import schema from "./blog-head.schema.json";

const meta: Meta<typeof BlogHead> = {
  title: "Blog/Head",
  component: BlogHead,
  parameters: {
    jsonSchema: {
      schema,
    },
  },
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof BlogHead>;

export const Default: Story = {};
Default.args = pack({
  date: "12/30/2022",
  tags: ["Technology", "AI"],
  headline: "The Future of AI",
  image: "img/close-up-young-business-team-working.png",
});
