import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { BlogAuthor } from "./BlogAuthorComponent";
import schema from "./blog-author.schema.dereffed.json";

const meta: Meta<typeof BlogAuthor> = {
  title: "Blog/ Blog Author",
  component: BlogAuthor,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof BlogAuthor>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 390,
      height: 646,
    },
  },
  args: pack({
    name: "Jane Smith",
    image: {
      src: "img/people/author-emily.png",
      aspectRatio: "square",
    },
    links: [
      {
        icon: "twitter",
        label: "jane_smith",
      },
      {
        icon: "email",
        label: "jane.smith@example.com",
      },
    ],
  }),
};
