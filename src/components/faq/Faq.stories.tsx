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
  headline: "FAQ Headline",
  intro: "This is an introduction to the FAQ",
  questions: [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
  ],
  variant: "default",
  align: "left",
});
