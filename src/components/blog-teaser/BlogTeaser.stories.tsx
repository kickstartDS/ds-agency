import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { BlogTeaser } from "./BlogTeaserComponent";
import schema from "./blog-teaser.schema.dereffed.json";
import customProperties from "./blog-teaser-tokens.json";

const meta: Meta<typeof BlogTeaser> = {
  title: "Blog/ Blog Teaser",
  component: BlogTeaser,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof BlogTeaser>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 504,
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
    teaserText:
      "Dive into the future of AI in this detailed blog post. Discover how technology is rapidly evolving, the impact of AI on various industries, and what to expect in the coming years. Learn about the latest advancements, challenges, and the potential solutions that AI brings to the table.",
    author: {
      name: "Jane Smith",
      title: "Senior AI Researcher",
      image: "img/people/author-emily.png",
    },
  }),
};
