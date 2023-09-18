import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Footer } from "./FooterComponent";
import schema from "./footer.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Layout/Footer",
  args,
  argTypes,
  component: Footer,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Footer>;

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
