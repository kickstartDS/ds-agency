import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Cta } from "./CtaComponent";
import cssprops from "./cta-tokens.json";
import schema from "./cta.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Components/Cta",
  args,
  argTypes,
  component: Cta,
  parameters: {
    jsonschema: schema,
    cssprops,
  },
};
type Story = StoryObj<typeof Cta>;

export default meta;

export const Banner: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 472,
    },
  },
  args: pack({
    headline: "Ready to Transform Your Development Process?",
    sub: "Start your journey today.",
    text: "Get started with our design system today and experience a new level of efficiency and consistency in your projects.",
    textAlign: "center",
    buttons: [
      {
        label: "Contact Us",
        target: "#",
        icon: "person",
      },
      {
        label: "Learn More",
        target: "#",
        icon: "date",
      },
    ],
  }),
};

export const Highlighted: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 551,
    },
  },
  args: pack({
    headline: "Why Choose Our Design System?",
    sub: "Built for consistency and speed.",
    highlightText: true,
    textAlign: "center",
    text: "Our design system is built with scalability and efficiency in mind. It allows for consistent UI across different platforms, making your development process smoother and faster.",
    buttons: [
      {
        label: "Get Started",
        target: "#",
        icon: "person",
      },
    ],
  }),
};

export const LeftAligned: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 443,
    },
  },
  args: pack({
    headline: "Experience Our Design System",
    sub: "Efficient, scalable, seamless.",
    text: "Our design system offers a seamless and efficient way to build scalable applications. Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    buttons: [
      {
        label: "Learn More",
        target: "#",
        icon: "person",
      },
    ],
  }),
};
