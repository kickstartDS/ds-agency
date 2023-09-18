import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Visual } from "./VisualComponent";
import schema from "./visual.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Components/Visual",
  args,
  argTypes,
  component: Visual,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Visual>;

export default meta;
export const BackgroundImage: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Experience the speed & scalability unlike anything seen before with our Sanity CMS powered websites, web apps & composable architecture.",
    media: {
      mode: "image",
      image: {
        srcMobile: "img/agency.svg",
        srcTablet: "img/visual-tablet.svg",
        srcDesktop: "img/visual.svg",
      },
    },
  }),
};
