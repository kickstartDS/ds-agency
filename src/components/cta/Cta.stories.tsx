import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Cta } from "./CtaComponent";
import schema from "./cta.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Components/CTA",
  args,
  argTypes,
  component: Cta,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Cta>;

export default meta;

export const LeftAlignedWithSingleButton: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    largeHeadline: false,
    text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    buttons: [
      {
        label: "Contact us",
        target: "#",
        icon: "person",
      },
    ],
  }),
};

export const LargeTextAndHeadline: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    largeHeadline: true,
    highlightText: true,
    text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    buttons: [
      {
        label: "Contact us",
        target: "#",
        icon: "person",
      },
    ],
  }),
};

export const CenteredWithMultipleButtons: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    align: "center",
    buttons: [
      {
        label: "Contact us",
        target: "#",
        icon: "person",
      },
      {
        label: "Book a meeting",
        target: "#",
        icon: "date",
      },
    ],
  }),
};
