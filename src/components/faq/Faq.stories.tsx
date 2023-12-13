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
      question: "What are the benefits of investing in a Design System?",
      answer:
        "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    },
    {
      question: "What is a Design System?",
      answer:
        "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    },
    {
      question: "What is the role of a Headless CMS in a Design System?",
      answer:
        "A Headless CMS plays a crucial role in a Design System by providing a content-first approach. It separates the back-end content from the front-end presentation layer, allowing for seamless integration with any design system. This results in a flexible, scalable, and platform-agnostic system that ensures content consistency across all platforms and devices.",
    },
  ],
});
