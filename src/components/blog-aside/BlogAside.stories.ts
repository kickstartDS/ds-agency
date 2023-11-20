import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { BlogAside } from "./BlogAsideComponent";
import schema from "./blog-aside.schema.json";

const meta: Meta<typeof BlogAside> = {
  title: "Blog/ Blog Aside",
  component: BlogAside,
  parameters: {
    jsonSchema: {
      schema,
    },
  },
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof BlogAside>;

export const Default: Story = {};
Default.args = pack({
  author: {
    name: "Jane Smith",
    image: "img/people/author-emily.png",
    twitter: "jane_smith",
    email: "jane.smith@example.com",
  },
  socialSharing: [
    {
      icon: "twitter",
      href: "https://twitter.com/share?text=The%20Future%20of%20AI&url=https://example.com/blog/the-future-of-ai",
      title: "Share on Twitter",
    },
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/blog/the-future-of-ai&title=The%20Future%20of%20AI&summary=The%20Future%20of%20AI&source=LinkedIn",
      title: "Share on LinkedIn",
    },
  ],
  readingTime: "5 min read",
  date: "12/30/2022",
});
