import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Faq } from "./FaqComponent";
import schema from "./faq.schema.json";

const meta: Meta<typeof Faq> = {
  title: "Components/Faq",
  component: Faq,
  parameters: {
    jsonSchema: {
      schema,
    },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;
type Story = StoryObj<typeof Faq>;

export const SingleDropdown: Story = {};
SingleDropdown.args = pack({
  questions: [
    {
      question: "What is a Design System?",
      answer:
        "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    },
  ],
});

export const DropdownsInAList: Story = {};
DropdownsInAList.args = pack({
  questions: [
    {
      question: "What is a Design System?",
      answer:
        "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    },
    {
      question: "What are the benefits of investing in a Design System?",
      answer:
        "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    },
  ],
});
