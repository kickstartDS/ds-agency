import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Faq } from "./FaqComponent";
import schema from "./faq.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Components/Faq",
  args,
  argTypes,
  component: Faq,
  parameters: {
    jsonschema: schema,
  },
};

export default meta;
type Story = StoryObj<typeof Faq>;

export const DropdownList: Story = {
  parameters: {
    viewport: {
      width: 820,
      height: 455,
    },
  },
  args: pack({
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
  }),
};

export const SingleDropdown: Story = {
  parameters: {
    viewport: {
      width: 820,
      height: 228,
    },
  },
  args: pack({
    questions: [
      {
        question: "What is a Design System?",
        answer:
          "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      },
    ],
  }),
};
