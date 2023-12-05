import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { CtaPaid } from "./CtaPaidComponent";
import schema from "./cta-paid.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Paid Components/CTA",
  args,
  argTypes,
  component: CtaPaid,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof CtaPaid>;

export default meta;

export const BannerWithColoredBackground: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    largeHeadline: true,
    backgroundColor: "#1a4378",
    order: {
      desktopImageLast: false,
    },
    buttons: [
      {
        label: "Learn More",
        target: "#",
      },
      {
        label: "Contact Us",
        target: "#",
      },
    ],
  }),
};

export const TextWithImage: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    largeHeadline: true,
    image: {
      src: "img/close-up-young-business-team-working.png",
    },
    order: {
      desktopImageLast: false,
    },
    buttons: [
      {
        label: "Learn More",
        target: "#",
      },
      {
        label: "Contact Us",
        target: "#",
      },
    ],
  }),
};

export const TextWithImageOverBackgroundImage: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    backgroundImage: "img/bg_dot-carpet-blue.svg",
    largeHeadline: true,
    backgroundColor: "#06081f",
    width: "wide",
    image: {
      src: "img/close-up-young-business-team-working.png",
    },
    order: {
      desktopImageLast: true,
    },
    buttons: [
      {
        label: "Learn More",
        target: "#",
      },
      {
        label: "Contact Us",
        target: "#",
      },
    ],
  }),
};
