import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./HeaderComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import schema from "./header.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Layout/Header",
  args,
  argTypes,
  component: Header,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Header>;

export default meta;
export const Default: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Experience the speed & scalability unlike anything seen before with our Sanity CMS powered websites, web apps & composable architecture.",
    ctaLabel: "Get in touch",
    ctaToggle: true,
    ctaTarget: "#",
  }),
};
