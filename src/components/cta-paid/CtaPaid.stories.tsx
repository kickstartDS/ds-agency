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

export const ImageBesideText: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
    largeHeadline: true,
    backgroundColor: "#06081f",
    image: {
      order: {
        desktopImageLast: false,
      },
    },
    width: "wide",
    ctas: [
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

export const ImageAndTextOverBackground: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
    backgroundImage: "img/cta-background.png",
    largeHeadline: true,
    backgroundColor: "#06081f",
    width: "wide",
    image: {
      order: {
        desktopImageLast: true,
      },
    },
    ctas: [
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
