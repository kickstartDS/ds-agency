import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { FAQ } from "./FaqComponent";
import schema from "./faq.schema.json";

const meta: Meta<typeof FAQ> = {
  title: "Components/FAQ",
  component: FAQ,
  parameters: {
    jsonSchema: {
      schema,
    },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;
type Story = StoryObj<typeof FAQ>;

export const Default: Story = {};
Default.args = pack({
  questions: [
    {
      question: "What is a Design System?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
    },
    {
      question: "What are the benefits of investing in a Design System?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
    },
  ],
});
