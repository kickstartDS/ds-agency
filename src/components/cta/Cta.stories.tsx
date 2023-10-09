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

export const AlignLeft: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
    secondaryCta: {
      label: "Contact us",
    },
  }),
};

export const AlignCenter: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
    align: "center",
    secondaryCta: {
      label: "Contact us",
    },
  }),
};
